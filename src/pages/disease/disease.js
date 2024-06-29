import React, { useState, useRef } from "react";
import { Circles } from "react-loader-spinner";
import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Header/Navbar";

const Disease = () => {
  const [photo, setPhoto] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [lang, setLang] = useState("en");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [useCamera, setUseCamera] = useState(true);
  const [loading, setLoading] = useState(false);
  const constraints = {
    video: true
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };
  let url = "http://127.0.0.1:5000/disease-predict/" + lang;
  let form = new FormData();
  const fileUpload = () => {
    setLoading(true);
    console.log("true");
    form.append("file", photo[0]);
    try {
      fetch(url, {
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: form
      })
        .then((response) => response.json())
        .then((data) => {
          let main_data = data["data"];
          setPrediction(main_data);
          console.log("res", data); // gives SyntaxError: Unexpected end of input
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  const captureImage = () => {
    setLoading(true);
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas image to a Blob and create a FormData object
    canvas.toBlob((blob) => {
      console.log("cameramodefile");
      form.append("file", blob);

      // Send the image to your backend API for prediction
      fetch(url, {
        method: "POST",
        body: form
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            console.log(data);
            setPrediction(data.data);
            // setPrediction(true);
          } else {
            console.error("Prediction failed:", data.message);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Prediction error:", error);
          setLoading(false);
        });
    }, "image/jpeg");
  };

  return (
    <>
      <Navbar />
      <PreHeader />
      <Header />
      <div>
        <p className="text-2xl font-medium text-green-600 my-12">
          Upload your image to get the disease prediction
        </p>
        <div className="flex flex-row space-x-3 my-10">
          <div>Please select a Language, default language is English</div>
          <div className="ml-16 ">
            <button
              onClick={() => setLang("en")}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              English
            </button>
          </div>
          <div className="ml-16">
            <button
              onClick={() => setLang("hi")}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Hindi
            </button>
          </div>
          <div className="ml-16 ">
            <button
              onClick={() => setLang("es")}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Spanish
            </button>
          </div>
        </div>
        <div className="flex flex-row mb-2">
          <div>Please select a Mode, default Mode is CameraMode</div>
          <div className="ml-16 ">
            <button
              onClick={() => setUseCamera(!useCamera)}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {useCamera ? "FileMode" : "CameraMode"}
            </button>
          </div>
        </div>
        {useCamera ? (
          // Camera interface
          <div className="flex flex-col gap-4 mb-3">
            <video ref={videoRef} autoPlay className="m-auto"></video>
            <div className="flex-col m-auto ">
              <button
                onClick={startCamera}
                type="button"
                className="inline-block px-6 py-2.5 mr-5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Start Camera
              </button>
              <button
                onClick={captureImage}
                type="button"
                className="inline-block px-6 py-2.5  bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Capture Image
              </button>
            </div>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          </div>
        ) : (
          // File upload interface
          <div className="grid place-items-center">
            <p className="title">Select Image:</p>
            <div className=" m-6">
              <input
                type="file"
                onChange={(e) => setPhoto([e.target.files[0]])}
              />
            </div>
            <button
              onClick={fileUpload}
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Get Upload
            </button>
          </div>
        )}
        {loading ? (
          <div className="grid place-items-center my-14 text-center ">
            <p className="font-bold my-3">Loading </p>
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          prediction && (
            <div className="grid place-items-center my-14 text-center">
              <p className="font-bold my-3">Disease From Image Predicted:</p>
              <div className="text-left bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">
                  {prediction.disease_name}
                </h3>
                {prediction.causes && (
                  <div className="mt-2">
                    <h4 className="text-md font-semibold">Causes:</h4>
                    <ul className="list-disc ml-6">
                      {prediction.causes["1"] && (
                        <li>{prediction.causes["1"]}</li>
                      )}
                      {prediction.causes["2"] && (
                        <li>{prediction.causes["2"]}</li>
                      )}
                      {prediction.causes["3"] && (
                        <li>{prediction.causes["3"]}</li>
                      )}
                    </ul>
                  </div>
                )}
                {prediction.prevent && (
                  <div className="mt-2">
                    <h4 className="text-md font-semibold">Prevent:</h4>
                    <ul className="list-disc ml-6">
                      {prediction.prevent["1"] && (
                        <li>{prediction.prevent["1"]}</li>
                      )}
                      {prediction.prevent["2"] && (
                        <li>{prediction.prevent["2"]}</li>
                      )}
                      {prediction.prevent["3"] && (
                        <li>{prediction.prevent["3"]}</li>
                      )}
                      {prediction.prevent["4"] && (
                        <li>{prediction.prevent["4"]}</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </div>

      <Footer />
    </>
  );
};

export default Disease;

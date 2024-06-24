import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Default } from "../../components/Default";
import { Divider } from "../../components/Divider";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import axios from "axios";

export const DeteksiUserAI = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State untuk status loading

  const PREDICTIONS_URL = '/api/predict';
  const getPredictions = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await axios.post(PREDICTIONS_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  };


  const handleFileChange = () => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
      setPreviewUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = async () => {
    event.preventDefault();

    if (!selectedFile) {
      console.error('Choose an image first!')
      return;
    }

    setIsLoading(true); // Mulai loading

    try {
      const result = await getPredictions(selectedFile);
      setPrediction(result);
      console.log(result)
    } catch (error) {
      console.error('Error making prediction:', error);
    } finally {
      setIsLoading(false); // Selesai loading
    }
  };

  // const [selectedFile, setSelectedFile] = useState(null);
  // const [predictionResult, setPredictionResult] = useState(null); // State untuk hasil prediksi

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   // You can add additional logic here, like uploading the file to a server
  // };

  // const handleButton = () => {
  //   document.getElementById("fileInput").click();
  // };

  // const handleButtonClick = async () => {
  //   if (selectedFile) {
  //     try {
  //       const formData = new FormData();
  //       formData.append("file", selectedFile);

  //       const api_endpoint = '/api/predict';
  //       const response = await axios.post(api_endpoint, formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data'
  //         }
  //       });

  //       // if (!response.ok) {
  //       //   throw new Error("Gagal mendapatkan respons dari server.");
  //       // }

  //       const data = await response.data;
  //       setPredictionResult(data); // Mengatur hasil prediksi ke state
  //       console.log(data)
  //     } catch (error) {
  //       console.error("Terjadi kesalahan:", error);
  //       // Handle error state or display error message to user
  //     }
  //   }
  // };

  const handleDeleteClick = () => {
    setSelectedFile(null);
    setPrediction(null); // Mengatur kembali state hasil prediksi jika ada
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[744px] relative">
        <div className="absolute w-[1674px] h-[1785px] top-[88px] left-[242px]">
          <div className="absolute w-[1674px] h-[1674px] top-[111px] left-0 bg-[#397d54b2] rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="absolute w-[1035px] h-[568px] top-0 left-[82px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2" />


          <div className="rounded-lg shadow-drop-shadow-2 flex flex-col w-[462px] h-[450px] items-start gap-[16px] p-[24px] absolute top-[67px] left-[616px] bg-primary-1">
            <div className="relative w-[414px] h-[61px] rounded-[10px]">
              <div className="flex flex-col w-[414px] h-[48px] items-start gap-[var(--brand-spacing-xxxs)] relative top-[7px]">
                <div className="relative self-stretch mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                  Hasil Deteksi Sampah
                </div>
                <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
                  Ayo ketahui jenis sampah dan cara penanganannya !
                </p>
              </div>

            </div>
            <div className="flex flex-col w-[414px] h-[243px] items-center justify-center gap-[12px] pt-[var(--brand-spacing-lg)] pr-[var(--brand-spacing-lg)] pb-[var(--brand-spacing-lg)] pl-[var(--brand-spacing-lg)] relative bg-primary-1 rounded-[var(--brand-radi-mlg)] border border-dashed border-primary-2">
            
            {isLoading && (
                <button type="button" class="bg-green-800 rounded text-white ..." disabled>
                <div
                  className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status">
                  <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >Loading...</span>
                </div>
                Processing...
                </button>
              )}

            {

              prediction ? (
                <div className="text-justify mx-5" >
                  <p><strong>Label:</strong> {prediction.label}</p>
                  <p><strong>Kategori:</strong> {prediction.category}</p>
                  <p><strong>Instruksi Penanganan:</strong> {prediction.handling_instructions}</p>
                </div>
                
                // <div className="text-center"> 

                //   {prediction.label} <br />
                //   {prediction.category} <br />
                //   {prediction.handling_instructions}
                // </div>
              ) : (
                <span></span>
              )
            }

            </div>
          </div>

          <div className="rounded-lg flex flex-col w-[462px] h-[450px] items-start gap-[16px] p-[24px] absolute top-[67px] left-[128px] bg-primary-1 ] shadow-drop-shadow-2">
            <div className="relative w-[414px] h-[61px] rounded-[10px]">
              <div className="flex flex-col w-[414px] h-[48px] items-start gap-[var(--brand-spacing-xxxs)] relative top-[7px]">
                <div className="relative self-stretch mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                  Upload Gambar
                </div>
                <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
                  Tambahkan gambar untuk mendeteksi sampah
                </p>
              </div>
            </div>
            {selectedFile ? (
              <div className="flex flex-col w-[414px] h-[243px] items-center justify-center gap-[12px] relative bg-primary-1 rounded-[var(--brand-radi-mlg)] border border-solid border-primary-2">
                <img
                  className="w-full h-full object-cover rounded-[var(--brand-radi-mlg)]"
                  src={previewUrl}
                  alt="Selected File"
                />
              </div>
            ) : (
              <div className="flex flex-col w-[414px] h-[243px] items-center justify-center gap-[12px] pt-[var(--brand-spacing-lg)] pr-[var(--brand-spacing-lg)] pb-[var(--brand-spacing-lg)] pl-[var(--brand-spacing-lg)] relative bg-alias-bgcolor-light rounded-[var(--brand-radi-mlg)] border border-dashed border-alias-strokecolor-primary">
                <img className="relative w-[42px] h-[42px]" alt="Upload" src="../../../static/img/upload.svg" />
                <input
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                      type="file"
                      accept="image/*"
                    />
                <div className="flex flex-col items-center gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                  <div className="flex items-start justify-center gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-body-small font-[number:var(--body-small-font-weight)] text-tersier-2 text-[length:var(--body-small-font-size)] tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
                      Upload disini
                    </div>
                  </div>
                  <Divider
                    borderWeight="w-text"
                    className="!flex-[0_0_auto] !w-[201px]"
                    divClassName="!text-alias-textcolor-secdefault"
                    lineClassName="!bg-alias-strokecolor-lightgrey"
                    lineClassNameOverride="!bg-alias-strokecolor-lightgrey"
                    size="full"
                    text="atau"
                    variants="solid"
                  />

                  <div className="relative !flex-[0_0_auto] !w-[149px]">
                    <input
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                      type="file"
                      accept="image/*"
                    />
                    {/* font-body-2-bold w-fit mt-[-1.00px] tracking-[var(--body-2-bold-letter-spacing)] text-[length:var(--body-2-bold-font-size)] [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] text-center whitespace-nowrap leading-[var(--body-2-bold-line-height)] relative */}
                    <span className="text-green-800 py-2 rounded-lg inline-block align-middle cursor-pointer font-body-2-bold !border-primary-2 !border-[3px] !border-solid !bg-primary-1 !w-full !justify-center !items-center mt-[-1.00px] tracking-[var(--body-2-bold-letter-spacing)] text-[length:var(--body-2-bold-font-size)] [font-style:var(--body-2-bold-font-style)] font-[number:var(--body-2-bold-font-weight)] text-center whitespace-nowrap leading-[var(--body-2-bold-line-height)]">
                      Masukkan File Anda
                    </span>
                  </div>

                  {/* <label
                  htmlFor="file-upload"
                  className="!cursor-pointer !border-primary-2 !flex-[0_0_auto] !border-[3px] !border-solid !flex !bg-primary-1 !w-[149px] !mr-[-4.50px] !mt-[-3.00px] !text-primary-2 !ml-[-4.50px]"
                  >
                  upload file
                  <input
                  id="file-upload"
                    // className="!cursor-pointer !border-primary-2 !flex-[0_0_auto] !border-[3px] !border-solid !flex !bg-primary-1 !w-[149px] !mr-[-4.50px] !mt-[-3.00px] !text-primary-2 !ml-[-4.50px]"
                    // divClassName="!mr-[-4.50px] !mt-[-3.00px] !text-primary-2 !ml-[-4.50px]"
                    // property1="default"
                    // text="Masukkan file anda"
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                  /> 
                  </label> */}
                  {/* <input
                  className="!cursor-pointer"
                    id="fileInput"
                    type="file"
                    accept=".jpg, .png"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  /> */}
                </div>
              </div>
            )}
            <p className="relative self-stretch h-[20px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-variable-collection-darkgrey text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] [font-style:var(--body-2-regular-font-style)]">
              Format yang didukung .jpg dan .png
            </p>
            <div className="flex w-[414px] items-start justify-end gap-[16px] relative flex-[0_0_auto] mb-[-10.00px]">
              {selectedFile && (
                <>
                <Button className="!flex-[0_0_auto]" property1="default" text="Hapus" onClick={handleDeleteClick} />
              <Button className="!flex-[0_0_auto]" property1="default" text="Deteksi" onClick={handleSubmit} />
              </>
              )}
            </div>

          </div>
        </div>
        {/* <div className="inline-flex items-start gap-[9.46px] px-[30.28px] py-[15.14px] absolute top-[-1816px] left-[321px] bg-primary-2 rounded-[10px] shadow-[0px_3.78px_4.73px_#00000066]">
          <div className="mt-[-0.95px] [font-family:'Nunito',Helvetica] font-bold text-[#f3ffd1] text-[15.1px] tracking-[0.08px] leading-[18.2px] relative w-fit text-center whitespace-nowrap">
            Bayar
          </div>
        </div> */}
        <SideBarWrapper
          className="!h-[744px] !fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          deteksiDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          deteksiClassName="!flex-[0_0_auto] !bg-secondary-1"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
        />
        <NavbarUserFitur
          className="!fixed !left-[324px] !top-0"
          profilArrowDown="../../../static/img/arrow-down-2-3.svg"
          profilOpenartImage="../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-3.png"
        />
      </div>
    </div>
  );
};

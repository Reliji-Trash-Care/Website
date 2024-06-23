import React from "react";
import { ContainerBerita } from "../../components/ContainerBerita";
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import { ContainerBerita2 } from "../../components/ContainerBerita2";

export const BeritaLatestUser = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 w-[1440px] h-[2367px] relative">
        
        <SideBarWrapper
          beritaPropertyDefaultClassName="!flex-[0_0_auto] !bg-secondary-1"
          className="!h-[772px] !rounded-[0px_15px_0px_0px] !fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          logoPlaceholderGroup="../../../static/img/group-7-2.png"
          beritaDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          beritaClassName="!flex-[0_0_auto] !bg-secondary-1"
        />
        <div className="absolute w-[792px] h-[2062px] top-[122px] left-[426px]">
          <ContainerBerita2
            className="!absolute !left-0 !top-0"
            ramadhanMomentum="../../../static/img/sampah-di-tpa-talang-gulo-kota-jambi-5-1.png"
            ramadhanMomentumClassName="![object-fit:unset]"
            text="Atasi Persoalan Sampah, Pemkot Jambi Keluarkan Instruksi Wali Kota"
            text1="Jambi.tribunnews.com"
            text2="M. Yon Rinaldi"
          />
          <div className="flex flex-col w-[792px] items-center justify-center gap-[42px] absolute top-[750px] left-0">
            <p className="relative self-stretch mt-[-1.00px] font-heading-7-regular font-[number:var(--heading-7-regular-font-weight)] text-[#0c1d0a] text-[length:var(--heading-7-regular-font-size)] text-justify tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] [font-style:var(--heading-7-regular-font-style)]">
              Atasi permasalahan sampah Pemerintah Kota (Pemkot) Jambi mengeluarkan instruksi Wali Kota No 5 Tahun 2024.
              Instruksi tersebut mengenai pembentukan Bank Sampah. Dimana setiap instansi hingga badan usaha harus
              memiliki bank sampah.
              <br />
              <br />
              Ardi Kepala Dinas Lingkungan Hidup (DLH) Kota Jambi mengatakan instruksi Wali Kota tersebut menyasar OPD,
              Camat hingga Lurah untuk membentuk bank sampah.
              <br />
              <br />
              &#34;Jadi setiap OPD nantinya harus memiliki Bank Sampah,&#34; ujarnya Jumat (22/3/2024).
              <br />
              <br />
              Selian itu, Rumah sakit, Puskesmas,&nbsp;&nbsp;Klinik, terminal, Bandara, pasar tradisional, pasar moderen
              dan seluruh aktifitas usaha memiliki bank sampah.
              <br />
              <br />
              &#34;Semua kegiatan usaha di kota Jambi hingga lingkungan pemukiman di arahkan untuk membentuk bank
              sampah,&#34; ungkapnya Ardi.
            </p>
            <div className="inline-flex flex-col items-center justify-center gap-3 relative flex-[0_0_auto]">
              <img
                className="relative self-stretch w-full h-[426px] object-cover"
                alt="Sampah foto"
                src="../../../static/img/sampah-jambi2-foto-5-2-2.png"
              />
              <p className="relative self-stretch font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-tersier-2 text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
                Bangkitku, merupakan rujukan untuk bank sampah induk yang akan dikelola pemerintah Kota Jambi.
              </p>
            </div>
            <p className="relative self-stretch font-heading-7-regular font-[number:var(--heading-7-regular-font-weight)] text-[#0c1d0a] text-[length:var(--heading-7-regular-font-size)] text-justify tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] [font-style:var(--heading-7-regular-font-style)]">
              Dengan adanya pengolahan sampah di tingkat sumber diharapkan dapat menekan volume sampah, sehingga sampah
              yang di kirirm ke TPA tinggal residu sampah. Sehingga berdampak makin panjangnya umur&nbsp;&nbsp;TPA
              Talang gulang.&nbsp;&nbsp;
              <br />
              <br />
              Di satu sisi hadirnya Bank Sampah juga memiliki nilai ekonomis untuk masyakat, dengan menjual sampah rumah
              tangga ke Bank Sampah. Selain itu, terget Pemkot Jambi untuk menghilangkan TPS di Jalan protokol bisa
              terlaksana.
              <br />
              <br />
              &#34;Kalau gerakan ini di lakukan secara masif insya Allah TPS di jalur protokol bisa kita tiadakan,&#34;
              ujar Ardi.
              <br />
              <br />
              Lebih lanjut Ardi mengatakan jika sudah berjalan pekerjaan rumah Pemkot Jambi tinggal&nbsp;&nbsp;mengolah
              sampah dari kabupaten tetangga yang masuk ke Jambi.
              <br />
              <br />
              &#34;Target kita yang utama mengurangi sampah sehingga tidak ada sampah di kota Jambi setidaknya ada
              pengurangan,&#34; pungkas Ardi.
            </p>
          </div>
        </div>
        <div className="pb-16 flex w-[997px] h-[62px] items-center justify-between pt-16 px-0 absolute top-[2380px] left-[324px] border-t-[0.5px] [border-top-style:solid] border-variable-collection-pure-black">
          <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
              <img className="relative w-5 h-5" alt="Arrow left" src="../../../static/img/arrow-left.svg" />
              <div onClick={() => window.location.href = '/beritadetailuser'} className="cursor-pointer relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                Sebelumnya
              </div>
            </div>
          </button>
          <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
            <div className="relative w-10 h-10 bg-primary-1 rounded-lg overflow-hidden">
              <div className="flex w-10 h-10 items-center justify-center p-3 relative rounded-lg">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  1
                </div>
              </div>
            </div>
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <div className="flex w-10 h-10 items-center justify-center p-3 relative rounded-lg">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  2
                </div>
              </div>
            </div>
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <div className="flex w-10 h-10 items-center justify-center p-3 relative rounded-lg">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  3
                </div>
              </div>
            </div>
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <div className="flex w-10 h-10 items-center justify-center p-3 relative rounded-lg">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  ...
                </div>
              </div>
            </div>
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <div className="flex w-10 h-10 items-center justify-center p-3 relative rounded-lg">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  8
                </div>
              </div>
            </div>
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <div className="flex w-10 h-10 items-center justify-center p-3 relative rounded-lg">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  9
                </div>
              </div>
            </div>
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <div className="flex w-10 h-10 items-center justify-center p-3 relative rounded-lg">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  10
                </div>
              </div>
            </div>
          </div>
          <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                Selanjutnya
              </div>
              <img className="relative w-5 h-5" alt="Arrow right" src="../../../static/img/arrow-right.svg" />
            </div>
          </button>
        </div>

        <NavbarUserFitur
          className="!fixed !left-[324px] !top-0"
          profilArrowDown="../../../static/img/arrow-down-2-3.svg"
          profilOpenartImage="../../../static/img/openart-image-nfswrdqc-1711466557108-raw-2-3.png"
        />
        
      </div>
    </div>
  );
};

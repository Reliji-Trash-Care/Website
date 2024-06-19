import React from "react";
import { ContainerBerita } from "../../components/ContainerBerita";
import { Footer } from "../../components/Footer";
import { NavbarGuest } from "../../components/NavbarGuest";
import { SubJudulFix } from "../../components/SubJudulFix";
import { ContainerBerita2 } from "../../components/ContainerBerita2";

export const BeritaDetailLatest = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[3186px] relative">
        <div className="absolute w-[1441px] h-[62px] top-0 -left-px">
          <NavbarGuest
            className="!left-[-3px] !w-[1443px]"
            logoPlaceholderGroup="../../../static/img/group-7-2.png"
            menuItemDivClassName="!underline !text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          />
        </div>
        <ContainerBerita2
          className="!absolute !left-[324px] !top-[122px]"
          ramadhanMomentum="../../../static/img/sampah-di-tpa-talang-gulo-kota-jambi-5-1.png"
          ramadhanMomentumClassName="![object-fit:unset]"
          text="Atasi Persoalan Sampah, Pemkot Jambi Keluarkan Instruksi Wali Kota"
          text1="Jambi.tribunnews.com"
          text2="M. Yon Rinaldi"
        />
        <div className="inline-flex flex-col items-center justify-center gap-[24px] absolute top-[708px] left-[324px]">
          <p className="relative w-[792px] mt-[120.00px] font-heading-7-regular font-[number:var(--heading-7-regular-font-weight)] text-tersier-2 text-[length:var(--heading-7-regular-font-size)] text-justify tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] [font-style:var(--heading-7-regular-font-style)]">
            Atasi permasalahan sampah Pemerintah Kota (Pemkot) Jambi mengeluarkan instruksi Wali Kota No 5 Tahun 2024.
            Instruksi tersebut mengenai pembentukan Bank Sampah. Dimana setiap instansi hingga badan usaha harus
            memiliki bank sampah.
          </p>
          <p className="relative w-[792px] font-heading-7-regular font-[number:var(--heading-7-regular-font-weight)] text-tersier-2 text-[length:var(--heading-7-regular-font-size)] text-justify tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] [font-style:var(--heading-7-regular-font-style)]">
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
          <div className="inline-flex flex-col items-center justify-center gap-[12px] relative flex-[0_0_auto]">
            <img
              className="relative self-stretch w-full h-[426px] object-cover"
              alt="Sampah foto"
              src="../../../static/img/sampah-jambi2-foto-5-2-2.png"
            />
            <p className="relative self-stretch font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-tersier-2 text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
              Bangkitku, merupakan rujukan untuk bank sampah induk yang akan dikelola pemerintah Kota Jambi.
            </p>
          </div>
          <p className="relative w-[792px] font-heading-7-regular font-[number:var(--heading-7-regular-font-weight)] text-tersier-2 text-[length:var(--heading-7-regular-font-size)] text-justify tracking-[var(--heading-7-regular-letter-spacing)] leading-[var(--heading-7-regular-line-height)] [font-style:var(--heading-7-regular-font-style)]">
            Dengan adanya pengolahan sampah di tingkat sumber diharapkan dapat menekan volume sampah, sehingga sampah
            yang di kirirm ke TPA tinggal residu sampah. Sehingga berdampak makin panjangnya umur&nbsp;&nbsp;TPA Talang
            gulang.&nbsp;&nbsp;
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
        <div className="absolute w-[1202px] h-[656px] top-[2170px] left-[119px]">
          <div className="flex w-[1201px] items-center justify-between pt-[20px] pb-0 px-0 absolute top-[596px] left-0 border-t-[0.5px] [border-top-style:solid] border-tersier-2">
            <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto]">
              <div className="items-center justify-center gap-[8px] inline-flex relative flex-[0_0_auto]">
                <img className="relative w-[20px] h-[20px]" alt="Arrow left" src="../../../static/img/arrow-left.svg" />
                <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-tersier-2 text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  Sebelumnya
                </div>
              </div>
            </button>
            <div className="inline-flex items-start gap-[2px] relative flex-[0_0_auto]">
              <div className="relative w-[40px] h-[40px] bg-primary-1 rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-tersier-2 text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    1
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-tersier-2 text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    2
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-tersier-2 text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    3
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-tersier-2 text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    ...
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-tersier-2 text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    8
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-tersier-2 text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    9
                  </div>
                </div>
              </div>
              <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
                <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                  <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-tersier-2 text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                    10
                  </div>
                </div>
              </div>
            </div>
            <button className="all-[unset] box-border items-start inline-flex relative flex-[0_0_auto]">
              <div className="items-center justify-center gap-[8px] inline-flex relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-tersier-2 text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  Selanjutnya
                </div>
                <img className="relative w-[20px] h-[20px]" alt="Arrow right" src="../../../static/img/arrow-right.svg" />
              </div>
            </button>
          </div>
          <div className="absolute w-[1200px] h-[491px] top-[63px] left-[2px]">
            <div className="relative h-[491px]">
              <div className="absolute w-[384px] h-[491px] top-0 left-0 bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
                <div className="flex flex-col w-[356px] items-start gap-[32px] absolute top-[16px] left-[14px]">
                  <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                    <img
                      className="relative w-[356.34px] h-[237.97px] mr-[-0.35px] object-cover"
                      alt="Sampah di TPA talang"
                      src="../../../static/img/sampah-di-tpa-talang-gulo-kota-jambi-5-1.png"
                    />
                    <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                      <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                        Jambi.tribunnews.com • 22 Maret 2024
                      </p>
                      <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                        <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                          Atasi Persoalan Sampah, Pemkot Jambi Keluarkan Instruksi Wali Kota
                        </p>
                        <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-2.svg" />
                      </div>
                      <p className="relative self-stretch mb-[-75.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                        Atasi permasalahan sampah Pemerintah Kota (Pemkot) Jambi mengeluarkan instruksi Wali Kota No 5
                        Tahun 2024.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-[356px] items-start gap-[8px] absolute top-[443px] left-[5px]">
                  <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
                    <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                      <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                        Sampah
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
                    <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                      <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                        Instruksi Wali Kota
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[384px] h-[491px] top-0 left-[408px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
                <div className="flex flex-col w-[356px] items-start gap-[32px] absolute top-[16px] left-[14px]">
                  <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                    <img
                      className="relative w-[356px] h-[235px] object-cover"
                      alt="Img"
                      src="../../../static/img/img-20240308-150338-1-1.png"
                    />
                    <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                      <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                        Infojambi.com • 8 Maret 2024
                      </p>
                      <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                        <p className="relative flex-1 mt-[-1.00px] [font-family:'Nunito',Helvetica] font-bold text-tersier-2 text-[18px] tracking-[0.09px] leading-[27px]">
                          DLH Provinsi Jambi Ajak Masyarakat Bersihkan Sampah di Danau Sipin
                        </p>
                        <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-2.svg" />
                      </div>
                      <p className="relative self-stretch mb-[-55.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                        Dinas Lingkungan Hidup (DLH) Provinsi Jambi melakukan aksi Bersih Negeri, memperingati Hari
                        Peduli Sampah Nasional (HPSN) 2024.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-[356px] items-start gap-[8px] absolute top-[443px] left-[5px]">
                  <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
                    <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                      <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                        Sampah
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
                    <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                      <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                        Dinas Lingkungan Hidup
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[384px] h-[491px] top-0 left-[816px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
                <div className="flex flex-col w-[356px] items-start gap-[32px] absolute top-[16px] left-[14px]">
                  <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
                    <img
                      className="relative w-[356px] h-[239px] object-cover"
                      alt="Lautan sampah"
                      src="../../../static/img/lautan-sampah-berserakan-dipinggiran-jalan-kota-jambi-169-1.png"
                    />
                    <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                      <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                        detikSumbagsel • 1 Februari 2024
                      </p>
                      <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                        <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-tersier-2 text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                          Jorok! Sampah Menumpuk di Pinggir Jalan Lintas Telanaipura Jambi
                        </p>
                        <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-2.svg" />
                      </div>
                      <p className="relative self-stretch mb-[-55.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                        Sampah berserakan di sepanjang pinggir jalan lintas di Kelurahan Teluk Kenali, Kecamatan
                        Telanaipura, Kota Jambi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-[356px] items-start gap-[8px] absolute top-[443px] left-[5px]">
                  <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
                    <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                      <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                        Sampah Liar
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
                    <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                      <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                        Jalan Lintas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SubJudulFix
            className="!gap-[15px] !flex !absolute !left-px !w-[1200px] !top-0"
            line="../../../static/img/line-18-1.svg"
            lineClassName="!self-stretch !w-full"
            subSubJudulClassName="!flex-1 !flex !grow"
            text="Berita Seputar Sampah"
          />
        </div>
        <Footer className="!absolute !left-0 !top-[2921px]" />
      </div>
    </div>
  );
};

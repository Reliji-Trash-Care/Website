import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "../../components/Button";
import { ContainerBerita } from "../../components/ContainerBerita";
import { Footer } from "../../components/Footer";
import { NavbarGuest } from "../../components/NavbarGuest";
import { SubJudulFix } from "../../components/SubJudulFix";

export const LandingPage = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[2735px] relative">
        <div className="absolute w-[1440px] h-[720px] top-0 left-0 bg-[url(/static/img/recycling-bins-in-the-park-contribute-to-aiding-the-earth.png)] bg-[100%_100%]">
          <img className="absolute w-[1440px] h-[720px] top-0 left-0" alt="Rectangle" src="../../../static/img/rectangle-291.svg" /> 
          <div className="absolute w-[791px] h-[365px] top-[193px] left-[120px]">
            <div className="absolute w-[382px] h-[70px] top-0 left-0">
              <div className="relative w-[380px] h-[70px]">
                <p className="absolute top-0 left-[39px] [font-family:'Nunito',Helvetica] font-normal text-primary-1 text-[45.5px] tracking-[0] leading-[normal]">
                  <span className="font-bold text-white">eliji </span>
                  <span className="font-light text-white">Trash Care</span>
                </p>
                <img className="absolute w-[51px] h-[51px] top-[11px] left-0" alt="Group" src="../../../static/img/group-7-2.png" />
              </div>
            </div>
            <p className="absolute w-[588px] top-[106px] left-0 font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-primary-1 text-[length:var(--body-1-regular-font-size)] tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] [font-style:var(--body-1-regular-font-style)]">
              Reliji Trash Care adalah website pengelolaan sampah yang menjadi solusi bagi pengelolaan sampah di
              lingkungan Desa Mendalo Indah, Jambi, yang dikelola oleh jasa pengangkut sampah Reliji.
              <br />
              Layanan kami:
            </p>
            <div className="inline-flex h-[56px] items-center gap-[12px] p-[16px] absolute top-[232px] left-0 rounded-[15px] border-2 border-solid border-primary-1">
              <img className="relative w-[28px] h-[28px] mt-[-2.00px] mb-[-2.00px]" alt="Chat" src="../../../static/img/chat.svg" /> 
              <div className="relative w-fit mt-[-1.00px] font-body-1-semibold font-[number:var(--body-1-semibold-font-weight)] text-primary-1 text-[length:var(--body-1-semibold-font-size)] tracking-[var(--body-1-semibold-letter-spacing)] leading-[var(--body-1-semibold-line-height)] whitespace-nowrap [font-style:var(--body-1-semibold-font-style)]">
                Jadwal Sampah
              </div>
            </div>
            <div className="flex w-[174px] h-[56px] items-center gap-[12px] pl-[20px] pr-[16px] py-[16px] absolute top-[232px] left-[209px] rounded-[15px] border-2 border-solid border-primary-1">
              <img
                className="relative w-[28.34px] h-[26px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px]"
                alt="Icon wallet"
                src="../../../static/img/icon-wallet.png"
              />
              <div className="relative w-fit mt-[-1.00px] font-body-1-semibold font-[number:var(--body-1-semibold-font-weight)] text-primary-1 text-[length:var(--body-1-semibold-font-size)] tracking-[var(--body-1-semibold-letter-spacing)] leading-[var(--body-1-semibold-line-height)] whitespace-nowrap [font-style:var(--body-1-semibold-font-style)]">
                Tagihan Iuran
              </div>
            </div>
            <div className="flex w-[182px] h-[56px] items-center gap-[8px] pl-[16px] pr-[24px] py-[16px] absolute top-[232px] left-[405px] rounded-[15px] border-2 border-solid border-primary-1">
              <img
                className="relative w-[30px] h-[30px] mt-[-3.00px] mb-[-3.00px]"
                alt="Calendar"
                src="../../../static/img/calendar.svg"
              />
              <div className="relative w-fit mt-[-1.00px] mr-[-8.00px] font-body-1-semibold font-[number:var(--body-1-semibold-font-weight)] text-primary-1 text-[length:var(--body-1-semibold-font-size)] tracking-[var(--body-1-semibold-letter-spacing)] leading-[var(--body-1-semibold-line-height)] whitespace-nowrap [font-style:var(--body-1-semibold-font-style)]">
                Chat Pengelola
              </div>
            </div>
            <div className="flex w-[191px] h-[56px] items-center gap-[8px] pl-[16px] pr-[24px] py-[16px] absolute top-[232px] left-[609px] rounded-[15px] border-2 border-solid border-primary-1">
              <img
                className="relative w-[32px] h-[33px] mt-[-4.50px] mb-[-4.50px]"
                alt="Deteksi"
                src="../../../static/img/deteksi.svg"
              />
              <div className="relative w-fit mt-[-1.00px] mr-[-8.00px] font-body-1-semibold font-[number:var(--body-1-semibold-font-weight)] text-primary-1 text-[length:var(--body-1-semibold-font-size)] tracking-[var(--body-1-semibold-letter-spacing)] leading-[var(--body-1-semibold-line-height)] whitespace-nowrap [font-style:var(--body-1-semibold-font-style)]">
                Deteksi Sampah
              </div>
            </div>
            <a href="/tentangkami">
            <Button
              className="!flex !absolute !left-0 !bg-primary-1 !w-[120px] !top-[325px]"
              divClassName="!mr-[-2.00px] !text-variable-collection-pure-black !ml-[-2.00px]"
              property1="default"
              text="Selengkapnya" 
            /></a>
          </div>
        </div>
        <ContainerBerita
          buttonText="Baca Selengkapnya"
          className="!absolute !left-[120px] !top-[843px]"
          text="Kultum: Ramadhan, Momentum untuk Menyadari Bahaya Sampah"
        />
        <div className="absolute w-[384px] h-[491px] top-[1283px] left-[120px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
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
                  <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-variable-collection-pure-black text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                    Atasi Persoalan Sampah, Pemkot Jambi Keluarkan Instruksi Wali Kota
                  </p>
                  <Link to="/beritadetaillatest"><img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" /></Link>
                </div>
                <p className="mb-[-75.00px] relative self-stretch font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Atasi permasalahan sampah Pemerintah Kota (Pemkot) Jambi mengeluarkan instruksi Wali Kota No 5 Tahun
                  2024.
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
        <div className="absolute w-[384px] h-[491px] top-[1283px] left-[528px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
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
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'Nunito',Helvetica] font-bold text-variable-collection-pure-black text-[18px] tracking-[0.09px] leading-[27px]">
                    DLH Provinsi Jambi Ajak Masyarakat Bersihkan Sampah di Danau Sipin
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" />
                </div>
                <p className="relative self-stretch mb-[-55.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Dinas Lingkungan Hidup (DLH) Provinsi Jambi melakukan aksi Bersih Negeri, memperingati Hari Peduli
                  Sampah Nasional (HPSN) 2024.
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
        <div className="absolute w-[384px] h-[491px] top-[1283px] left-[936px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
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
                  <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-variable-collection-pure-black text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                    Jorok! Sampah Menumpuk di Pinggir Jalan Lintas Telanaipura Jambi
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" />
                </div>
                <p className="relative self-stretch mb-[-55.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Sampah berserakan di sepanjang pinggir jalan lintas di Kelurahan Teluk Kenali, Kecamatan Telanaipura,
                  Kota Jambi.
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
        <div className="absolute w-[384px] h-[491px] top-[1816px] left-[120px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
          <div className="flex flex-col w-[356px] items-start gap-[32px] absolute top-[16px] left-[14px]">
            <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[356px] h-[239px] object-cover"
                alt="Img"
                src="../../../static/img/img-20240104-wa0123-1.png"
              />
              <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                  Infopublik.id • 4 Januari 2024
                </p>
                <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                  <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-variable-collection-pure-black text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                    Pemkot Jambi Denda Masyarakat yang Buang Sampah Sembarangan
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" />
                </div>
                <p className="mb-[-35.00px] relative self-stretch font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Dua orang oknum warga Kota Jambi tertangkap tangan membuang sampah tidak&nbsp;&nbsp;pada waktunya.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-[356px] items-start gap-[8px] absolute top-[443px] left-[7px]">
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
                  Denda
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[384px] h-[491px] top-[1816px] left-[528px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
          <div className="flex flex-col w-[356px] items-start gap-[32px] absolute top-[16px] left-[14px]">
            <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[354px] h-[240px] object-cover"
                alt="Img"
                src="../../../static/img/01hfbavvv0kxve2xb3d9jjv6w8-1.png"
              />
              <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                  Kumparan.com • 19 November 2023
                </p>
                <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                  <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-variable-collection-pure-black text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                    Botol Plastik: Ancaman Lingkungan yang Mendesak untuk Dihadapi?
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" />
                </div>
                <p className="mb-[-35.00px] relative self-stretch font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Negara Indonesia merupakan salah satu negara yang menghasilkan limbah plastic yang cukup tinggi
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-[356px] items-start gap-[8px] absolute top-[443px] left-[5px]">
            <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
              <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Botol Plastik
                </div>
              </div>
            </div>
            <div className="inline-flex items-start relative flex-[0_0_auto] mix-blend-multiply">
              <div className="inline-flex items-center justify-center px-[10px] py-[2px] relative flex-[0_0_auto] bg-primary-1 rounded-[16px]">
                <div className="relative w-fit mt-[-1.00px] font-body-2-semibold font-[number:var(--body-2-semibold-font-weight)] text-tersier-2 text-[length:var(--body-2-semibold-font-size)] text-center tracking-[var(--body-2-semibold-letter-spacing)] leading-[var(--body-2-semibold-line-height)] whitespace-nowrap [font-style:var(--body-2-semibold-font-style)]">
                  Ancaman
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[384px] h-[491px] top-[1816px] left-[936px] bg-primary-1 rounded-[15px] shadow-drop-shadow-2">
          <div className="flex flex-col w-[356px] items-start gap-[32px] absolute top-[16px] left-[14px]">
            <div className="flex flex-col items-start gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[356px] h-[238px] object-cover"
                alt="Element sampah"
                src="../../../static/img/30082019-sampah-648316104d498a39ae413ce2-1.png"
              />
              <div className="flex-col h-[100px] gap-px flex items-start relative self-stretch w-full">
                <p className="relative self-stretch h-[34px] mt-[-1.00px] font-body-1-bold font-[number:var(--body-1-bold-font-weight)] text-tersier-2 text-[length:var(--body-1-bold-font-size)] tracking-[var(--body-1-bold-letter-spacing)] leading-[var(--body-1-bold-line-height)] [font-style:var(--body-1-bold-font-style)]">
                  Kompasiana.com • 9 Juni 2023
                </p>
                <div className="h-[60px] gap-[16px] flex items-start relative self-stretch w-full">
                  <p className="relative flex-1 mt-[-1.00px] font-heading-8-bold font-[number:var(--heading-8-bold-font-weight)] text-variable-collection-pure-black text-[length:var(--heading-8-bold-font-size)] tracking-[var(--heading-8-bold-letter-spacing)] leading-[var(--heading-8-bold-line-height)] [font-style:var(--heading-8-bold-font-style)]">
                    Jambi Hadapi Masalah Serius dengan Tingginya Jumlah Sampah
                  </p>
                  <img className="relative flex-[0_0_auto]" alt="Icon wrap" src="../../../static/img/icon-wrap-5.svg" />
                </div>
                <p className="relative self-stretch mb-[-55.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-tersier-2 text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] [font-style:var(--body-2-regular-font-style)]">
                  Kota Jambi menghadapi masalah serius akibat meningkatnya jumlah sampah yang belum teratasi dengan
                  baik.
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
                  Kota Jambi
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[1201px] h-[62px] items-center justify-between pt-[20px] pb-0 px-0 absolute top-[2348px] left-[120px] border-t-[0.5px] [border-top-style:solid] border-variable-collection-pure-black">
          <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
              <img className="relative w-[20px] h-[20px]" alt="Arrow left" src="../../../static/img/arrow-left.svg" />
              <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                Sebelumnya
              </div>
            </div>
          </button>
          <div className="inline-flex items-start gap-[2px] relative flex-[0_0_auto]">
            <div className="relative w-[40px] h-[40px] bg-primary-1 rounded-[8px] overflow-hidden">
              <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  1
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  2
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  3
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  ...
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  8
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  9
                </div>
              </div>
            </div>
            <div className="relative w-[40px] h-[40px] rounded-[8px] overflow-hidden">
              <div className="flex w-[40px] h-[40px] items-center justify-center p-[12px] relative rounded-[8px]">
                <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] text-center tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                  10
                </div>
              </div>
            </div>
          </div>
          <button className="all-[unset] box-border inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-[8px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-variable-collection-pure-black text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                Selanjutnya
              </div>
              <img className="relative w-[20px] h-[20px]" alt="Arrow right" src="../../../static/img/arrow-right.svg" />
            </div>
          </button>
        </div>
        <Footer className="!absolute !left-0 !top-[2470px]" />
        <SubJudulFix
          className="!gap-[15px] !flex !absolute !left-[120px] !w-[1200px] !top-[780px]"
          line="../../../static/img/line-18-1.svg"
          lineClassName="!self-stretch !w-full"
          subSubJudulClassName="!flex-1 !flex !grow"
          text="Berita Seputar Sampah"
        />
        <NavbarGuest
          landingpagedivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          className="!fixed !left-0 !top-0"
          logoPlaceholderGroup="../../../static/img/group-7-3.png"
          landingpageClassName="!underline !text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
        />
      </div>
    </div>
  );
};

import React from "react";
import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import { NavbarUserFitur } from "../../components/NavbarUserFitur";
import { SideBarWrapper } from "../../components/SideBarWrapper";
import 'rsuite/styles/index.less'; // or 'rsuite/dist/rsuite.min.css'

const styles = {
  calendar: {
    backgroundColor: '#f5f5f5', // Contoh warna background
    color: '#333', // Contoh warna teks
  },
  todoListItem: {
    color: '#397d54', // Warna teks agenda
  },
  badge: {
    backgroundColor: '#397d54', // Warna badge
  },
  moreLink: {
    color: '#235d3a', // Warna link more
  }
};

function getTodoList(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns 0-11, so we add 1
  const year = date.getFullYear();

  if (day === 11 && month === 6 && year === 2024) {
    return [
      { time: '08:00', title: 'Pengangkutan Sampah' },
    ];
  }

  if (day === 15 && month === 6 && year === 2024) {
    return [
      { time: '12:00 am', title: 'Pembayaran Tagihan' },
    ];
  }

  return [];
}

function renderCell(date) {
  const list = getTodoList(date);
  const displayList = list.filter((item, index) => index < 2);

  if (list.length) {
    const moreCount = list.length - displayList.length;
    const moreItem = (
      <li key="more">
        <Whisper
          placement="top"
          trigger="click"
          speaker={
            <Popover>
              {list.map((item, index) => (
                <p key={index}>
                  <b>{item.time}</b> - {item.title}
                </p>
              ))}
            </Popover>
          }
        >
          <a style={styles.moreLink}>{moreCount} more</a>
        </Whisper>
      </li>
    );

    return (
      <ul className="calendar-todo-list">
        {displayList.map((item, index) => (
          <li key={index} style={styles.todoListItem}>
            <Badge style={styles.badge} /> <b>{item.time}</b> - {item.title}
          </li>
        ))}
        {moreCount ? moreItem : null}
      </ul>
    );
  }

  return null;
}

export const JadwalSampahUser = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-primary-1 overflow-hidden w-[1440px] h-[900px] relative">
        <div className="absolute w-[1674px] h-[1787px] top-[86px] left-[242px]">
          <div className="absolute w-[1674px] h-[1674px] top-[113px] left-0 bg-[#397d54b2] rounded-[837px] blur-[550px] opacity-[0.36]" />
          <div className="flex flex-col w-[690px] h-[780px] items-start gap-[16px] p-[16px] absolute top-0 left-[388px] bg-primary-1 rounded-[10px] shadow-drop-shadow-2">
            <div className="flex items-center justify-center gap-[32px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 font-body-1-semibold font-[number:var(--body-1-semibold-font-weight)] text-neutral-800 text-[length:var(--body-1-semibold-font-size)] text-center tracking-[var(--body-1-semibold-letter-spacing)] leading-[var(--body-1-semibold-line-height)] [font-style:var(--body-1-semibold-font-style)]">
                Kalender
              </div>
            </div>
            <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
              <div className="flex flex-col items-start gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
                  alt="Divider"
                  src="../../../static/img/divider.svg"
                />
              </div>
              <div className="flex flex-col items-start gap-px relative flex-1 self-stretch w-full grow" style={styles.calendar}>
                <Calendar bordered renderCell={renderCell} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[282px] h-[97px] items-start justify-center gap-[10px] px-[16px] py-[8px] absolute top-[503px] left-[82px] bg-primary-1 rounded-[10px] shadow-drop-shadow-2">
            <div className="flex flex-wrap w-[196px] items-start gap-[7px_18px] relative flex-[0_0_auto]">
              <div className="relative w-[24px] h-[24px] bg-primary-2 rounded-[12px]" />
              <div className="relative w-fit mt-[-1.00px] font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-tersier-2 text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                Angkut sampah
              </div>
              <br></br>
              <div className="relative w-[24px] h-[24px] bg-additional-1 rounded-[12px]" />
              <div className="relative w-fit font-body-1-regular font-[number:var(--body-1-regular-font-weight)] text-tersier-2 text-[length:var(--body-1-regular-font-size)] text-center tracking-[var(--body-1-regular-letter-spacing)] leading-[var(--body-1-regular-line-height)] whitespace-nowrap [font-style:var(--body-1-regular-font-style)]">
                Pembayaran iuran
              </div>
            </div>
          </div>
          <img className="absolute w-[283px] h-[312px] top-[99px] left-[81px]" alt="Image" src="../../../static/img/image-4.png" />
        </div>
        <SideBarWrapper
          className="!h-[772px] !rounded-[0px_15px_0px_0px] !fixed !left-0 !top-0"
          deteksiDeteksi="../../../static/img/deteksi-3.svg"
          jadwalDivClassName="!text-primary-2 !tracking-[0] !text-[16px] ![font-style:unset] !font-bold ![font-family:'Nunito',Helvetica] !leading-[22.4px]"
          jadwalClassName="!flex-[0_0_auto] !bg-secondary-1"
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

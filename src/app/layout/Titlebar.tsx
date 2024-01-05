'use client';
import {
    UserFollowedIcon,
    ChromeMinimizeIcon,
    ChromeFullScreenIcon,
    ChromeCloseIcon,
} from '@fluentui/react-icons-mdl2';
import styles from './Titlebar.module.css';

const { ipcRenderer } = window.require('electron');
const ipc = ipcRenderer;

export default function TitleTopbar() {
    return (
        <div className={styles.titleTopbar}>
            {/* <div className="flex w-full h-[50px] text-white bg-[#217346] flex-col items-center justify-center">  */}
            <div className={styles.titlebar}>
                {/* <div className="flex flex-row items-center space-between w-full h-[45px] m-0"> */}
                <div className={styles.titlebar__left}>
                    {/* <div className="flex flew-row h-[100%] justify-right "> */}
                    {/* <img
            src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_org.jpg?61e575e8653e5920470a38d1482d7312/melon/optimize/90"
            alt="test"
          /> */}
                </div>
                {/* deepsafe */}
                <div className={styles.titlebar__right}>
                    {/* <div className="flex flex-row right justify-right w-[250px] h-[95%] text-white hover:bg-[#107c41]"> */}
                    <button>
                        이상민
                        <UserFollowedIcon
                            className={styles.titlebar__usericon}
                        />
                        {/* <UserFollowedIcon className="w-[18px] h-[18px] p-[4px] m-[5px] text-black ml-[5px] bg-grey-300 border-solid border-1" /> */}
                    </button>
                    <ChromeMinimizeIcon
                        // className="w-[16px] h-[16px] p-[16px] text-white border-solid  "
                        className={styles.titlebar__windowbtn}

                        // onClick={() => {
                        //   ipc.sendMessage('minimize');
                        // }}
                    />
                    <ChromeFullScreenIcon
                        className={styles.titlebar__windowbtn}
                        // className="w-[16px] h-[16px] p-[16px] text-white border-solid  "
                        // onClick={() => {
                        //   ipc.sendMessage('maximize');
                        // }}
                    />
                    <ChromeCloseIcon
                        className={styles.titlebar__windowbtn}
                        // className="w-[16px] h-[16px] p-[16px] text-white border-solid  "
                        // onClick={() => {
                        //   ipc.sendMessage('close');
                        // }}
                    />
                </div>
            </div>
            <div className={styles.topbar}>
                {/* <div className="w-[100vw] h-[30px] pt-[5px] bg-[#f0f0f0]"> */}

                <div className={styles.topbar__option}>
                    {/* <div className="flex flex-row items-left justify-left ml-[5px]"> */}

                    <button className="hover:border-b-grey-100">파일</button>
                    <button className="hover:border-b-grey-100">홈</button>
                    <button className="hover:border-b-grey-100">도움말</button>
                </div>
            </div>
        </div>
    );
}

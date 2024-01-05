import { useSelector } from 'react-redux';
import Titlebar from '../layout/Titlebar';
import RibbonBox from '../layout/RibbonBox';
import SidebarMenu from '../layout/SidebarMenu';
import Sidebar from '../layout/sidebar/Sidebar';
import ContentPage from '../layout/ContentPage';
import Footer from '../layout/Footer';
import styles from './MainPage.module.css';

export default function MainPage() {
    return (
        <div className={styles.container}>
            <div className={styles.titlebar}>
                <Titlebar />
            </div>
            <div className={styles.ribbonbox}>
                <RibbonBox />
            </div>
            <div className={styles.sidebarmenu}>
                <SidebarMenu />
            </div>
            <div>
                <Sidebar />
            </div>
            <div className={styles.mainpage}>
                <ContentPage />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
}

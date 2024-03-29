import { useSelector } from 'react-redux';
import SidebarProjectList from './SidebarProjectList';
import SidebarFile from './SidebarFile';
import SidebarDatabase from './SidebarDatabase';
import SidebarSetting from './SidebarSetting';
import SidebarPanorama from './SidebarPanorama';
import SidebarThreejs from './SidebarThreejs';
import SidebarVideoplayer from './SidebarVideoplayer';

function Sidebar() {
    const currentTab = useSelector((state) => state.data.sidebar.currentTab);
    const renderComponent = () => {
        switch (currentTab) {
            case 'project':
                return <SidebarProjectList />;
            case 'image':
                return <SidebarFile />;
            case 'panorama':
                return <SidebarPanorama />;
            case 'database':
                return <SidebarDatabase />;
            case 'settings':
                return <SidebarSetting />;

            case 'threeJs':
                return <SidebarThreejs />;
            case 'videoplayer':
                return <SidebarVideoplayer />;
        }
    };
    return <div className="sidebarMain">{renderComponent()}</div>;
}

export default Sidebar;

import React from 'react';
import ContentProjectPage from './content/ContentProjectPage';
import ContentImagePage from './content/ContentImagePage';
import ContentPanorama from './content/ContentPanorama';
import { useSelector } from 'react-redux';
import ContentStreamingPage from './content/ContentStreamingPage';
import ContentThreeJS from './content/ContentThreeJS';
import ContentVideoplayer from './content/ContentVideoplayer';

function ContentPage() {
    const currentTab = useSelector((state) => state.data.sidebar.currentTab);
    const renderComponent = () => {
        switch (currentTab) {
            case 'project':
                return <ContentProjectPage />;
            case 'image':
                return <ContentImagePage />;
            case 'streaming':
                return <ContentStreamingPage />;
            case 'panorama':
                return <ContentPanorama />;
            case 'threeJs':
                return <ContentThreeJS />;
            case 'videoplayer':
                return <ContentVideoplayer />;
            // case "settings": return <SidebarSetting />;
            default:
                return <div style={{ color: 'purple' }}>default</div>;
        }
    };

    return <div>{renderComponent()}</div>;
}

export default ContentPage;

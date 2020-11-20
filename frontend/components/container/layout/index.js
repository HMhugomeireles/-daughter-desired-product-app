import TopNavigation from '../TopNavigation'
import SideNavigation from '../SideNavigation'
import Content from '../Content'


export default function Layout({ children }) {

    return (
        <>
            <TopNavigation />
            <SideNavigation />
            <Content>
                {children}
            </Content>
        </>
    )
}
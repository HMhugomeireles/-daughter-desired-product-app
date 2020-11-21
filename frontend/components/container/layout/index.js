import TopNavigation from '../TopNavigation'
import SideNavigation from '../SideNavigation'
import Content from '../Content'


export default function Layout(props) {

    return (
        <>
            <TopNavigation />
            <SideNavigation />
            <Content>{ props.children }</Content>
        </>
    )
}
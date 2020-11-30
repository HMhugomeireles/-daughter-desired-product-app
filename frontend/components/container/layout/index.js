import TopNavigation from '../TopNavigation'
import SideNavigation from '../SideNavigation'
import Content from '../Content'
import LayoutUI from '../../ui/layout'


export default function Layout(props) {

    return (
        <LayoutUI>
            <TopNavigation />
            <SideNavigation />
            <Content>{ props.children }</Content>
        </LayoutUI>
    )
}
import * as React from 'react'
import * as styles from './index.scss'

import Header from './Header'
import CampaignsTable from './Table'
import AutoSizer from '@components/AutoSizer'


interface IProps {
    fullTemplate?: () => Promise<any>
}

class Campaigns extends React.Component<IProps> {
    render() {
        return (
            <div className={styles.container}>
                <Header />
                <AutoSizer className={styles.tableBox}>{({ height }) => <CampaignsTable scrollY={height - 160} />}</AutoSizer>
            </div>
        ) 
    }
}
export default Campaigns
import React from 'react'
import {Switch, Route} from 'react-router'
import {Layout} from 'antd'

import styles from './styles.module.scss'
import Payment from './Payment'
import {Menu} from '../../components/NavBar'
import {Header} from '../../components/Header'
import {CatalogPage} from './Catalog'

export default function Public(): React.ReactElement {
    return (
        <Layout className={styles.layout}>
            <Menu/>
            <Layout.Content className={styles.content}>
                <Header/>
                <Switch>
                    <Route path="/catalog" component={CatalogPage}/>
                    <Route path="/pay" component={Payment}/>
                    <Route path="/" component={CatalogPage}/>
                </Switch>
            </Layout.Content>
        </Layout>
    )
}

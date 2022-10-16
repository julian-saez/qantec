import { Component } from 'solid-js';
import Card from '../../shared/molecules/Card/Card';
import CardContent from '../../shared/molecules/CardContent/CardContent';
import styles from './Dashboard.module.css';

const Dashboard: Component = () =>
{
    return (
        <section class="p-6">
            <Card>
                <CardContent class={styles.content}>
                    <p>Dashboard</p>
                    <p>esto es template dashboard</p>
                </CardContent>
            </Card>
        </section>
    );
};

export default Dashboard;

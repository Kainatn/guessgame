import React, { Component } from 'react';
import './Game.css'
import { Layout, Typography, Button } from 'antd';
import { GuessEasy } from './GuessEasy';
import GuessMedium from './GuessMedium';
import GuessHard from './GuessHard';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
const { Header, Footer, Content } = Layout;
const { Title } = Typography;
export class Game extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Header>
                        <Title level={2}>Guess The Number</Title>
                    </Header>
                    <Content>
                        <div>
                            <Link to="/"> <Button type="primary">Easy</Button></Link>
                            <Link to="/medium"> <Button>Medium</Button></Link>
                            <Link to="/hard"><Button type="primary">Hard</Button></Link>

                        </div>
                        <Switch>
                            <Route path="/" exact component={GuessEasy} />
                            <Route path="/medium" component={GuessMedium} />
                            <Route path="/hard" component={GuessHard} />
                            {/* <GuessEasy />
                    <GuessMedium/>
                    <GuessHard/> */}

                        </Switch>
                    </Content>
                    <Footer>All right reserve to Guess The Number </Footer>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default Game;

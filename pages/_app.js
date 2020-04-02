import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Applayout from '../components/Applayout';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import withRedux from 'next-redux-wrapper';
import reducer from '../reducers/index';

const NodeBird = ({ Component, store }) => {
	return (
		<Provider store={store}>
			<Head>
				<title>NodeBird</title>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css"
				/>
			</Head>
			<Applayout>
				<Component />
			</Applayout>
		</Provider>
	);
};

NodeBird.propTypes = {
	Component: PropTypes.elementType, // jsx에 들어갈 수 있는 (렌더링 될 수 있는) 모든 것을 node라고한다.
	store: PropTypes.object,
};

export default withRedux((initialState, options) => {
	const middlewares = [];
	const enhancer = compose(
		applyMiddleware(...middlewares),
		!options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
			? window.__REDUX_DEVTOOLS_EXTENSION__()
			: (f) => f,
	);
	const store = createStore(reducer, initialState, enhancer);
	return store;
})(NodeBird);

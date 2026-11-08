import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { installAnalytics } from '@/lib/analytics';

installAnalytics();

ReactDOM.createRoot(document.getElementById('root')).render(
	<App />
);

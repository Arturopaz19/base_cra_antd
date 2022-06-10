import { ConfigProvider } from "antd";
import esES from "antd/lib/locale/es_ES";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import STORE, { Persistor } from "reducer/store";
import { PersistGate } from "redux-persist/integration/react";
import App from "router/App";
// wrapper of Providers
const AppProvider = () => {
    return (
        <ConfigProvider locale={esES}>
            <Provider store={STORE}>
                <PersistGate loading={null} persistor={Persistor}>
                    <Router>
                        <App />
                    </Router>
                </PersistGate>
            </Provider>
        </ConfigProvider>
    )
}
export default AppProvider;
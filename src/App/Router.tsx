import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Account from "Page/Account";
import NotFoundPage from "Page/NotFoundPage";
import URLS from "Constants/urls";
import BillingViewPdf from "Components/Billing/BillingViewPdf";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={URLS.accountResult} element={<Account />} />
                <Route path={URLS.other} element={<NotFoundPage />} />
                <Route path={URLS.viewPdf} element={<BillingViewPdf />} />
            </Switch>
        </BrowserRouter>
    );
};
export default Router;

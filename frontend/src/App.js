import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Favorites from "./components/Favorites/Favorites";
import Account from "./components/Account/Account";
import Basket from "./components/Basket/Basket";
import NoMatch from "./components/NoMatch/NoMatch";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Status from "./components/Status/Status";
import History from "./components/History/History";
import CategoryItemsList from "./components/CategoryItemsList/CategoryItemsList";
import EspeciallyForYouPage from "./components/EspeciallyForYouPage/EspeciallyForYouPage";
import CardItemDetails from "./components/CardItemDetails/CardItemDetails";
import Pay from "./components/Pay/Pay";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Notifications from "./components/Notifications/Notifications";
import PlacingOrder from "./components/placingOrder/placingorder";
import EditProfile from "./components/EditProfile/EditProfile";
import NotFound from "./components/errors/notFound";
import Review from "./components/Review/Review";
import Search from "./components/Search/Search";

let tg = window.Telegram.WebApp;
tg.expand();

function App() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="App bg-white h-full w-full">
      {!pathname.includes("/categories/item-details/") ? <Header /> : ""}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/basket" element={<Basket />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/categories/*" element={<CategoryItemsList />} />
        <Route exact path="/categories" element={<CategoriesList />} />
        <Route
          exact
          path="/categories/item-details/*"
          element={<CardItemDetails />}
        />
        <Route exact path="/account/history" element={<History />} />
        <Route exact path="/account/history/review" element={<Review />} />
        <Route exact path="/account/status" element={<Status />} />
        <Route exact path="/account/edit" element={<EditProfile />} />
        <Route
          exact
          path="/especially-for-you"
          element={<EspeciallyForYouPage />}
        />
        <Route exact path="/basket/payment" element={<Pay />} />
        <Route exact path="/basket/placingorder" element={<PlacingOrder />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
      {!pathname.includes("/categories/item-details/") ? <Footer /> : ""}
    </div>
  );
}

export default App;

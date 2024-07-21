import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Update = React.lazy(() => import("pages/Update"));
const ContactUsOne = React.lazy(() => import("pages/ContactUsOne"));
const UpdateOne = React.lazy(() => import("pages/UpdateOne"));
const BlogPostOne = React.lazy(() => import("pages/BlogPostOne"));
const BlogOne = React.lazy(() => import("pages/BlogOne"));
const MyAccountwishlist = React.lazy(() => import("pages/MyAccountwishlist"));
const MyAccountorders = React.lazy(() => import("pages/MyAccountorders"));
const MyAccountAddress = React.lazy(() => import("pages/MyAccountAddress"));
const MyAccount = React.lazy(() => import("pages/MyAccount"));
const Cart = React.lazy(() => import("pages/Cart"));
const OrderComplete = React.lazy(() => import("pages/OrderComplete"));
const CheckOut = React.lazy(() => import("pages/CheckOut"));
const ShopPageThree = React.lazy(() => import("pages/ShopPageThree"));
const ShopPageTwo = React.lazy(() => import("pages/ShopPageTwo"));
const ShopPageOne = React.lazy(() => import("pages/ShopPageOne"));
const UpdateTwo = React.lazy(() => import("pages/UpdateTwo"));
const ProductPageTwo = React.lazy(() => import("pages/ProductPageTwo"));
const ProductPageOne = React.lazy(() => import("pages/ProductPageOne"));
const FlyoutCart = React.lazy(() => import("pages/FlyoutCart"));
const SignInPopupDesktop = React.lazy(() => import("pages/SignInPopupDesktop"));
const UpdateThree = React.lazy(() => import("pages/UpdateThree"));
const HomepageFour = React.lazy(() => import("pages/HomepageFour"));
const HomepageThree = React.lazy(() => import("pages/HomepageThree"));
const HomepageTwo = React.lazy(() => import("pages/HomepageTwo"));
const HomepageOne = React.lazy(() => import("pages/HomepageOne"));
const SignUpPopupDesktop = React.lazy(() => import("pages/SignUpPopupDesktop"));
const Icons = React.lazy(() => import("pages/Icons"));
const ColorLibrary = React.lazy(() => import("pages/ColorLibrary"));
const QuickChangeLightTypography = React.lazy(
  () => import("pages/QuickChangeLightTypography"),
);
const WelcomeThree = React.lazy(() => import("pages/WelcomeThree"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/welcomethree" element={<WelcomeThree />} />
          <Route
            path="/quickchangelighttypography"
            element={<QuickChangeLightTypography />}
          />
          <Route path="/colorlibrary" element={<ColorLibrary />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/signuppopupdesktop" element={<SignUpPopupDesktop />} />
          <Route path="/homepageone" element={<HomepageOne />} />
          <Route path="/homepagetwo" element={<HomepageTwo />} />
          <Route path="/homepagethree" element={<HomepageThree />} />
          <Route path="/homepagefour" element={<HomepageFour />} />
          <Route path="/updatethree" element={<UpdateThree />} />
          <Route path="/signinpopupdesktop" element={<SignInPopupDesktop />} />
          <Route path="/flyoutcart" element={<FlyoutCart />} />
          <Route path="/productpageone" element={<ProductPageOne />} />
          <Route path="/productpagetwo" element={<ProductPageTwo />} />
          <Route path="/updatetwo" element={<UpdateTwo />} />
          <Route path="/shoppageone" element={<ShopPageOne />} />
          <Route path="/shoppagetwo" element={<ShopPageTwo />} />
          <Route path="/shoppagethree" element={<ShopPageThree />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/ordercomplete" element={<OrderComplete />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/myaccountaddress" element={<MyAccountAddress />} />
          <Route path="/myaccountorders" element={<MyAccountorders />} />
          <Route path="/myaccountwishlist" element={<MyAccountwishlist />} />
          <Route path="/blogone" element={<BlogOne />} />
          <Route path="/blogpostone" element={<BlogPostOne />} />
          <Route path="/updateone" element={<UpdateOne />} />
          <Route path="/contactusone" element={<ContactUsOne />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;

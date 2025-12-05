import { Routes, Route, Outlet } from "react-router";

import App from "./pages/App";
import TodoList from "./pages/TodoList";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";

function Router() {
  // / => App
  // /todolist => Todolist
  return (
    <Routes>
      {/* layout routes */}
      {/* <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/todolist" element={<TodoList />} />
      </Route> */}
      {/* nested routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<App />} /> {/* index routes */}
        <Route path="todolist" element={<TodoList />} />
      </Route>
      {/* prefix routes */}
      <Route path="/app/v2">
        <Route index element={<App />} /> {/* index routes */}
        <Route path="todolist" element={<TodoList />} />
      </Route>
      {/* Rute Catch All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;

function Home() {
  return <div>Home</div>;
}
function Login() {
  return <div>Login</div>;
}
function Register() {
  return <div>Register</div>;
}
function ForgotPass() {
  return <div>ForgotPass</div>;
}
function ProductList() {
  return (
    <>
      <div>ProductList</div>
      {/* <Outlet /> */}
    </>
  );
}
function ProductDetail() {
  return (
    <>
      <div>ProductDetail</div>
      {/* <Outlet /> */}
    </>
  );
}
function ProductOrder() {
  return <div>ProductOrder</div>;
}
function UserProfile() {
  return <div>UserProfile</div>;
}
function UserHistory() {
  return <div>UserHistory</div>;
}

function Header() {
  return <header>Toko Koda</header>;
}
function Footer() {
  return <footer>Copyright Koda</footer>;
}
function Sidebar() {
  return (
    <section>
      <div>
        <img src="" alt="foto_user" />
        <p>Nama User</p>
      </div>
      <nav>
        <ul>
          <li>Profile</li>
          <li>History</li>
          <li>Logout</li>
        </ul>
      </nav>
    </section>
  );
}

function AuthLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
function ProductLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
function UserLayout() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-[3fr_7fr]">
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

/**
 * / => home
 * /auth => login
 * /auth/new => register
 * /auth/forgot => forgot pwd
 * /user => profile
 * /user/order => history order
 * /products => list product
 * /products/detail => detail product
 * /products/detail/order => order product
 *
 * auth punya layout sendiri (no header, only footer)
 * product punya layout berupa header + footer
 * user berbentuk dashboard (ada sidebar + header + footer),
 *  pada profil menampilkan data diri
 *  pada history menampilkan list order
 * aplikasi berada pada /app/v1
 */

function AppRouter() {
  return (
    <Routes>
      <Route path="/app/v1">
        <Route element={<ProductLayout />}>
          <Route index element={<Home />} />
          <Route path="products">
            <Route index element={<ProductList />} />
            <Route path="detail">
              <Route index element={<ProductDetail />} />
              <Route path="order" element={<ProductOrder />} />
            </Route>
          </Route>
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="new" element={<Register />} />
          <Route path="forgot" element={<ForgotPass />} />
        </Route>
        <Route path="user" element={<UserLayout />}>
          <Route index element={<UserProfile />} />
          <Route path="order" element={<UserHistory />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

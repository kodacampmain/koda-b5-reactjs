import { Routes, Route, Outlet } from "react-router";

import App from "./pages/App";
import TodoList from "./pages/TodoList";
import TodoListRedux from "./pages/TodoListRedux";
import NotFound from "./pages/NotFound";
import Pokemon from "./pages/Pokemon";

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
        <Route path="todolist">
          <Route index element={<TodoList />} />
          <Route path="redux" element={<TodoListRedux />} />
        </Route>
        <Route path="pokemon" element={<Pokemon />} />
      </Route>
      {/* prefix routes */}
      {/* <Route path="/app/v2"> */}
      {/* index routes */}
      {/* <Route index element={<App />} />
        <Route path="todolist" element={<TodoList />} />
      </Route> */}
      {/* Rute Catch All */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;

function Home() {
  return <div>Home</div>;
}
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const validCreds = {
      email: "mail@mail.com",
      password: "12345qqq",
    };
    if (validCreds.email !== e.target.email.value) {
      return;
    }
    if (validCreds.password !== e.target.password.value) {
      return;
    }
    navigate("/app/v1");
  };
  return (
    <>
      <div>Login</div>
      <form noValidate onSubmit={submitHandler}>
        <input type="email" name="email" placeholder="Input Email" />
        <input type="password" name="password" placeholder="Input Password" />
        <button
          type="submit"
          className="border-std cursor-pointer border-black"
        >
          Login
        </button>
      </form>
    </>
  );
}
function Register() {
  return <div>Register</div>;
}
function ForgotPass() {
  return <div>ForgotPass</div>;
}
import { Link } from "react-router";
function ProductList() {
  const products = [
    {
      id: 1,
      slug: "sikat-gigi",
      title: "Sikat Gigi",
    },
    {
      id: 10,
      slug: "sabun-mandi",
      title: "Sabun Mandi",
    },
    {
      id: 100,
      slug: "kanebo-motor",
      title: "Kanebo Motor",
    },
  ];
  return (
    <>
      <div>ProductList</div>
      <section>
        {products.map(({ id, slug, title }) => {
          return (
            <Link key={id} to={`/app/v1/products/${id}/${slug}`}>
              <div>{title}</div>
            </Link>
          );
        })}
      </section>
      {/* <Outlet /> */}
    </>
  );
}
import { useParams } from "react-router";
function ProductDetail() {
  const { id, slug } = useParams();
  return (
    <>
      <div>
        ProductDetail dengan id: {id} dan slug: {slug}
      </div>
      {/* <Outlet /> */}
    </>
  );
}
function ProductOrder() {
  const { id, slug } = useParams();
  return (
    <div>
      ProductOrder dgn id: {id} dan slug: {slug}
    </div>
  );
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
 * /products/:id => detail product dgn id yang ada di param
 * /products/:id/order => order product dgn id yang ada di param
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
            <Route path=":id">
              <Route path=":slug">
                <Route index element={<ProductDetail />} />
                <Route path="order" element={<ProductOrder />} />
              </Route>
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

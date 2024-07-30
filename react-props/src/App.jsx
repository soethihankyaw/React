import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <div id="app">
      <UserProfile age={31} isMarried={true} />
    </div>
  );
}

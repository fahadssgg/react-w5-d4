export default function LogIn() {
  return (
    <div className=" flex-col  pt-10 text-center ">
      <input className="border m-3" type="text" placeholder="UserName" />
      <br></br>
      <input className="border m-3" type="password" placeholder="Password" />
      <br></br>
      <button className="border m-3 px-5 rounded-md font-bold bg-slate-800 text-white">
        <a href="/ll">LogIn</a>
      </button>
    </div>
  );
}

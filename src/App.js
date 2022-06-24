

function App() {
  return (
    <div className="App">
     <form>
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input 
        type="email"
        name="email"
        id="email"
        className="form-control"
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input 
        type="password"
        name="password"
        id="password"
        className="form-control"
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label">
        Confirm Password
        </label>
        <input 
        type="password"
        name="password"
        id="password"
        className="form-control"
        />
      </div>
     </form>
    </div>
  );
}

export default App;

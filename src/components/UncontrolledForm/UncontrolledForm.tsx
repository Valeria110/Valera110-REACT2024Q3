import { FormEventHandler, useRef } from 'react';

export default function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    console.log(formData.get('file'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputField">
        <label htmlFor="name">Name: </label>
        <input ref={nameRef} type="text" name="name" id="name" />
      </div>
      <div className="inputField">
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" id="age" />
      </div>
      <div className="inputField">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="inputField">
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="inputField">
        <label htmlFor="confirm-password">Confirm password: </label>
        <input type="password" name="confirm-password" id="confirm-password" />
      </div>
      <div className="inputField">
        <label htmlFor="gender">Gender: </label>
        <select name="gender" id="gender" defaultValue="male">
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
      <div className="inputField">
        <label htmlFor="t&c">Accept Terms and Conditions: </label>
        <input type="checkbox" name="t&c" id="t&c" />
      </div>
      <div className="inputField">
        <label htmlFor="file">Upload a picture (png/jpeg): </label>
        <input type="file" name="file" id="file" accept="image/png, image/jpeg" />
      </div>
      <div className="inputField">
        <label htmlFor="country">Country: </label>
        <select name="country" id="country" defaultValue="Belarus">
          <option value="Belarus">Belarus</option>
          <option value="Germany">Germany</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

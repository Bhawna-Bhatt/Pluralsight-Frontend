import { useState } from "react";
import DisplayState from "./DisplayState";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male  ");
  const [country, setCountry] = useState("");
  const [likesP, setLikesP] = useState("");
  const [likesL, setLikesL] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // log values from controlled inputs
    console.log(name, lastname, email, dob, gender, country, likesP, likesL);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Date of Birth"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />

        <label>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          ></input>
          Male
        </label>

        <label>
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          ></input>
          Female
        </label>

        <br />

        <select
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="MO">Mexico</option>
        </select>

        <br />

        <label>
          <input
            type="checkbox"
            checked={likesP}
            onChange={(e) => setLikesP(e.target.value)}
          />
          Likes Pineapple
        </label>

        <label>
          <input
            type="checkbox"
            checked={likesL}
            onChange={(e) => setLikesL(e.target.value)}
          />
          Likes Liquorice
        </label>

        <br />

        <button>Submit</button>
      </form>

      <p>
        The values entered before display : <br />
        {name}
      </p>
      <DisplayState
        name={name}
        lastname={lastname}
        email={email}
        dob={dob}
        gender={gender}
        country={country}
        likesP={likesP}
        likesL={likesL}
      />
    </div>
  );
}

/*class SignUpForm extends Component {
  state = {};

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="First Name" />

          <input placeholder="Last Name" />

          <input placeholder="Email" type="email" />

          <input placeholder="Date of Birth" type="date" />

          <br />

          <label>
            <input type="radio"></input>
            Male
          </label>

          <label>
            <input type="radio"></input>
            Female
          </label>

          <br />

          <select name="country">
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="MO">Mexico</option>
          </select>

          <br />

          <label>
            <input type="checkbox" />
            Likes Pineapple
          </label>

          <label>
            <input type="checkbox" />
            Likes Liquorice
          </label>

          <br />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}*/

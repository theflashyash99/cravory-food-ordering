// AboutUs.jsx
import React from "react";

class AboutUs extends React.Component {
  state = {
    userInfo: {
      name: "Username",
      location: "Default",
      avatar_url: "http://dummy-photo.com",
      bio: "This is a short bio. I'm passionate about coding, design, and open-source.",
      followers: 0,
      following: 0,
      public_repos: 0,
    },
  };

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/theflashyash99");
    const json = await res.json();
    this.setState({
      userInfo: {
        name: json.name || json.login,
        location: json.location,
        avatar_url: json.avatar_url,
        bio: json.bio,
        followers: json.followers,
        following: json.following,
        public_repos: json.public_repos,
      },
    });
  }

  render() {
    const {
      name,
      location,
      avatar_url,
      bio,
      followers,
      following,
      public_repos,
    } = this.state.userInfo;

    return (
      <section className="mt-24 max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col items-center p-8 sm:flex-row sm:items-start ">
          <img
            src={avatar_url}
            alt={name}
            className="w-32 h-32 rounded-full border-4 border-indigo-500"
          />
          <div className="mt-6 text-center sm:mt-0 sm:ml-6 sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            {location && <p className="text-indigo-600">{location}</p>}
            {bio && <p className="mt-2 text-gray-600">{bio}</p>}
            <div className="mt-4 flex justify-center sm:justify-start space-x-4">
              <div className="text-center">
                <span className="font-semibold">{followers}</span>
                <p className="text-sm text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <span className="font-semibold">{following}</span>
                <p className="text-sm text-gray-500">Following</p>
              </div>
              <div className="text-center">
                <span className="font-semibold">{public_repos}</span>
                <p className="text-sm text-gray-500">Repos</p>
              </div>
            </div>
            <div className="mt-6 flex justify-center sm:justify-start space-x-4">
              <a
                href="https://github.com/theflashyash99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                🐙 GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yash-jaiswal-664588231"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;

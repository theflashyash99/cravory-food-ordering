// AboutUs.jsx
import React from "react";

class AboutUs extends React.Component {
  state = {
    userInfo: {
      name: "Username",
      location: "Default",
      avatar_url: "https://via.placeholder.com/150",
      bio: "This is a short bio. I'm passionate about coding, design, and open-source.",
      followers: 0,
      following: 0,
      public_repos: 0,
    },
  };

  async componentDidMount() {
    try {
      const res = await fetch("https://api.github.com/users/theflashyash99");
      const json = await res.json();

      this.setState({
        userInfo: {
          name: json.name || json.login || "N/A",
          location: json.location || "N/A",
          avatar_url: json.avatar_url || "https://via.placeholder.com/150",
          bio: json.bio || "No bio available.",
          followers: json.followers || 0,
          following: json.following || 0,
          public_repos: json.public_repos || 0,
        },
      });
    } catch (error) {
      console.error("Failed to fetch GitHub user:", error);
    }
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
      <section className="mt-24 mx-4 sm:mx-auto max-w-3xl bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 sm:p-8">
          {/* Avatar */}
          <img
            src={avatar_url}
            alt={`${name}'s avatar`}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-indigo-500 object-cover"
          />

          {/* User Info */}
          <div className="mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-indigo-600 text-sm">{location}</p>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{bio}</p>

            {/* Stats */}
            <div className="mt-4 flex justify-center sm:justify-start gap-6">
              <div className="text-center">
                <p className="text-lg font-semibold">{followers}</p>
                <p className="text-sm text-gray-500">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">{following}</p>
                <p className="text-sm text-gray-500">Following</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">{public_repos}</p>
                <p className="text-sm text-gray-500">Repos</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex justify-center sm:justify-start gap-4 text-sm">
              <a
                href="https://github.com/theflashyash99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 flex items-center"
              >
                🐙 GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yash-jaiswal-664588231"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 flex items-center"
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

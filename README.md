# hero-actions-demo

This is an example React project demonstrating the use of [hero-actions](https://github.com/NiccoCorsini/hero-actions) to streamline and simplify action & reducers management in Redux. The project showcases a simulated login/logout flow where a trigger action is dispatched and intercepted by the login saga, which then dispatches state actions and calls a Fake API with the provided payload. Based on the response, it dispatches either a success action with the relevant payload or a failure action with an error payload. This example highlights the power and simplicity of hero-actions in real-world state management scenarios.

## Demo

Open the console to monitor the action flow! Redux-logger will clearly display the payload, prev state, and next state for each dispatched action.

- **Live Demo**: [GitHub Pages](https://niccocorsini.github.io/hero-actions-demo/)
- **CodeSandbox**: [CodeSanbox Link](https://codesandbox.io/p/github/NiccoCorsini/hero-actions-demo/main)

## Prerequisites

Ensure you have Node.js and npm installed.

## Installation

To run the example locally:

1. Clone the repository:

```bash
git clone https://github.com/NiccoCorsini/hero-actions-demo.git
cd hero-actions-demo
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Features Demonstrated

This example showcases key functionalities provided by hero-actions:

- Typed action creation for robust state management
- Seamless handling of async flows with Redux-Saga for login/logout
- Enhanced action monitoring with redux-logger to track actions, payloads, and state updates in reducers

For detailed usage and API documentation, refer to the official [hero-actions documentation](https://github.com/NiccoCorsini/hero-actions#readme).

## Contributing

This project is open for contributions. Feel free to fork, open issues, or submit pull requests to improve the example and its utility.

## License

This project is licensed under the ISC License - see the [LICENSE](./LICENSE.txt) file for details.

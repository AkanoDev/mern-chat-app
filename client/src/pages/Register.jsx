import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Register() {
  const {
    register,
    updateRegister,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <div className="bg-yellow-50 flex flex-col items-center justify-center h-screen gap-5">
      <div className="zig-zag-top absolute h-12 bg-green-600 z-10 top-0 left-0 right-0"></div>
      <div className="zig-zag-bottom absolute h-12 bg-green-600 z-10 bottom-0 left-0 right-0"></div>
      <figure className="flex flex-col items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180px"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          clipRule="evenodd"
          viewBox="0 0 128 129"
          id="durian"
        >
          <path fill="none" d="M0 .265h128v128H0z"></path>
          <path
            fill="#367200"
            d="M33.69 29.275s-3.994-13.964-9.006-21.124a4.541 4.541 0 0 0-5.443-.994c-.482.18-.946.418-1.391.647a1.784 1.784 0 0 0-.193 3.058c7.193 4.912 11.634 10.425 16.033 18.413Z"
          ></path>
          <path
            fill="#4d9800"
            d="m34.082 88.518-3.82 2.348a3.82 3.82 0 0 1-5.609-2.011l-.786-2.286a3.817 3.817 0 0 0-2.808-2.49l-4.629-.995a3.819 3.819 0 0 1-2.634-5.395l.22-.456a3.815 3.815 0 0 0-2.309-5.31l-2.648-.818a3.818 3.818 0 0 1-2.549-4.676l1.635-5.847a3.82 3.82 0 0 0-.585-3.269l-4.834-6.669a3.816 3.816 0 0 1-.051-4.407l3.016-4.374a3.814 3.814 0 0 0 .417-3.546l-.676-1.744a3.82 3.82 0 0 1 2.573-5.067l5.116-1.37a3.817 3.817 0 0 0 2.83-3.687V23.08a3.82 3.82 0 0 1 4.459-3.764l5.941 1.013a3.819 3.819 0 0 0 3.795-1.613l5.496-8.06a3.816 3.816 0 0 1 4.452-1.439l4.891 1.769a3.818 3.818 0 0 0 2.506.032l5.579-1.86a3.819 3.819 0 0 1 4.44 1.591l1.486 2.365a3.816 3.816 0 0 0 3.233 1.787h4.167c1.601 0 3.032.999 3.583 2.502l.983 2.676a3.816 3.816 0 0 0 3.583 2.502h4.599a3.817 3.817 0 0 1 3.817 3.817v5.132c0 1.429.798 2.738 2.069 3.393l6.648 3.427a3.818 3.818 0 0 1 1.54 5.33l-2.399 4.077c-.272.463-.64.863-1.077 1.174l-55.66 39.587"
          ></path>
          <path
            fill="#367200"
            d="m22.813 61.894-3.897-3.289a.408.408 0 0 1-.058-.565l3.502-4.44a1.5 1.5 0 1 0-2.356-1.857l-3.501 4.439a3.408 3.408 0 0 0 .478 4.716l3.897 3.288a1.5 1.5 0 0 0 1.935-2.292zm-.898-22.89-1.5-3.921a.41.41 0 0 1 .382-.555h4.304a1.5 1.5 0 0 0 0-3h-4.304a3.409 3.409 0 0 0-3.184 4.627l1.5 3.921a1.5 1.5 0 0 0 2.802-1.072zm15.549-.763-.718-6.419a.41.41 0 0 1 .501-.443l7.099 1.692a1.501 1.501 0 0 0 .695-2.918l-7.098-1.692a3.409 3.409 0 0 0-4.178 3.695l.718 6.418a1.5 1.5 0 0 0 2.981-.333zm6.18-14.483 2.383-4.549a.409.409 0 0 1 .681-.067L50.602 24a1.5 1.5 0 1 0 2.34-1.877l-3.893-4.857a3.41 3.41 0 0 0-5.68.55l-2.382 4.55a1.5 1.5 0 1 0 2.657 1.392z"
          ></path>
          <path
            fill="#e5f20d"
            fillOpacity=".25"
            d="m20.67 83.995-4.24-.911a3.819 3.819 0 0 1-2.634-5.395l.22-.456a3.815 3.815 0 0 0-2.309-5.31l-2.648-.818a3.818 3.818 0 0 1-2.549-4.676l1.635-5.847a3.82 3.82 0 0 0-.585-3.269l-4.834-6.669a3.816 3.816 0 0 1-.051-4.407l3.016-4.374a3.814 3.814 0 0 0 .417-3.546l-.676-1.744a3.82 3.82 0 0 1 2.573-5.067l5.116-1.37a3.817 3.817 0 0 0 2.83-3.687V23.08a3.82 3.82 0 0 1 4.459-3.764l5.941 1.013a3.819 3.819 0 0 0 3.795-1.613l5.496-8.06a3.816 3.816 0 0 1 4.452-1.439l4.69 1.696a3.819 3.819 0 0 0-3.028 1.665l-5.495 8.06a3.817 3.817 0 0 1-3.795 1.612l-5.941-1.012a3.819 3.819 0 0 0-4.459 3.764v3.368a3.818 3.818 0 0 1-2.83 3.688l-5.116 1.37a3.814 3.814 0 0 0-2.573 5.067l.676 1.743a3.818 3.818 0 0 1-.417 3.547L8.79 48.159a3.816 3.816 0 0 0 .051 4.407l4.833 6.669c.684.943.9 2.147.586 3.268l-1.635 5.848a3.816 3.816 0 0 0 2.549 4.675l2.648.819a3.819 3.819 0 0 1 2.309 5.31l-.22.456a3.814 3.814 0 0 0 .759 4.384Z"
          ></path>
          <path
            fill="#367200"
            d="M93.467 52.331c-1.095-2.725 21.597-21.789 24.62-21.352a.81.81 0 0 1 .284.332c.272.491.885 1.82 1.526 3.213a3.77 3.77 0 0 1-2.42 5.214c-2.725.744-6.329 1.937-9.621 3.621-7.545 3.86-14.126 9.627-14.389 8.972Z"
          ></path>
          <path
            fill="#73af03"
            d="M98.877 49.124a1.679 1.679 0 0 1-2.801-1.328l.223-4.755a3.817 3.817 0 0 0-1.606-3.293l-1.684-1.194a3.819 3.819 0 0 1-1.611-3.115v-.21a3.819 3.819 0 0 0-4.587-3.739l-2.638.543a3.816 3.816 0 0 1-3.154-.758l-2.677-2.141a3.815 3.815 0 0 0-5.519.801l-2.269 3.262a3.818 3.818 0 0 1-4.562 1.361l-2.003-.808a2.449 2.449 0 0 0-3.362 2.27v.001a1.39 1.39 0 0 1-1.391 1.392h-7.867a3.819 3.819 0 0 0-3.717 2.943l-1.256 5.339a3.817 3.817 0 0 1-3.716 2.944h-2.549a3.816 3.816 0 0 0-3.771 4.41l.302 1.927a3.817 3.817 0 0 1-2.238 4.089l-3.483 1.527a3.816 3.816 0 0 0-1.979 4.994l1.868 4.377a3.82 3.82 0 0 1-.482 3.821l-3.266 4.26a3.82 3.82 0 0 0-.385 4.03l1.993 3.984a3.817 3.817 0 0 1-.583 4.267l-1.853 2.05a3.82 3.82 0 0 0 .323 5.437l1.971 1.72a3.818 3.818 0 0 1 1.308 2.876v5.736a3.818 3.818 0 0 0 3.026 3.735l6.655 1.409a3.82 3.82 0 0 1 2.407 1.649l2.853 4.376a3.816 3.816 0 0 0 5.489.969l2.32-1.741a3.82 3.82 0 0 1 3.876-.419l7.648 3.492a2.887 2.887 0 0 0 3.73-1.238v-.001a2.614 2.614 0 0 1 2.889-1.289l4.635 1.083a3.818 3.818 0 0 0 4.557-2.729l.133-.499a3.818 3.818 0 0 1 4.291-2.782l5.386.862a3.82 3.82 0 0 0 4.421-3.77v-.932a3.817 3.817 0 0 1 3.817-3.818h3.441a3.817 3.817 0 0 0 3.818-3.817v-2.419a3.816 3.816 0 0 1 2.819-3.684l2.062-.559a3.818 3.818 0 0 0 2.819-3.685v-2.085c0-1.547.934-2.941 2.364-3.53l3.266-1.345a3.82 3.82 0 0 0 1.784-5.554l-.171-.272a3.819 3.819 0 0 1 .788-4.952l3.653-3.056a3.817 3.817 0 0 0-.242-6.042l-1.946-1.38a3.818 3.818 0 0 1-1.61-3.114v-3.345a3.818 3.818 0 0 0-3.818-3.818h-1.756a3.736 3.736 0 0 1-3.344-2.069l-.001-.002a3.764 3.764 0 0 0-4.802-1.8l-3.106 1.279a1.817 1.817 0 0 1-2.183-.641l-.87-1.249a1.392 1.392 0 0 0-2.074-.24l-.003.002Z"
          ></path>
          <path
            fill="#f2ca6d"
            d="M96.689 51.568a1.522 1.522 0 0 1-2.537-1.203l.201-4.307a3.458 3.458 0 0 0-1.454-2.983l-1.526-1.082a3.457 3.457 0 0 1-1.459-2.821v-.191a3.457 3.457 0 0 0-4.155-3.387l-2.39.492a3.456 3.456 0 0 1-2.857-.686l-2.425-1.94a3.457 3.457 0 0 0-4.999.725l-2.056 2.956a3.457 3.457 0 0 1-4.132 1.232l-1.814-.731a2.217 2.217 0 0 0-3.046 2.056v.001a1.263 1.263 0 0 1-1.261 1.261h-7.126a3.457 3.457 0 0 0-3.366 2.666l-1.138 4.836a3.459 3.459 0 0 1-3.366 2.666h-2.31a3.459 3.459 0 0 0-3.416 3.995l.274 1.746a3.459 3.459 0 0 1-2.027 3.704l-3.156 1.383a3.459 3.459 0 0 0-1.792 4.525l1.692 3.964a3.46 3.46 0 0 1-.437 3.462l-2.958 3.858a3.46 3.46 0 0 0-.349 3.651l1.805 3.609a3.458 3.458 0 0 1-.527 3.865 2380.7 2380.7 0 0 0-1.679 1.858 3.457 3.457 0 0 0 .292 4.925l1.786 1.557a3.462 3.462 0 0 1 1.185 2.606v5.196a3.457 3.457 0 0 0 2.741 3.383l6.028 1.277c.896.189 1.68.727 2.18 1.494l2.586 3.963a3.459 3.459 0 0 0 4.971.878l2.102-1.577a3.459 3.459 0 0 1 3.511-.379l6.929 3.163a2.616 2.616 0 0 0 3.378-1.122v-.001a2.37 2.37 0 0 1 2.617-1.168l4.199.982a3.458 3.458 0 0 0 4.127-2.473l.121-.451a3.458 3.458 0 0 1 3.887-2.52l4.879.78a3.457 3.457 0 0 0 4.005-3.415v-.844a3.458 3.458 0 0 1 3.458-3.458h3.117a3.459 3.459 0 0 0 3.458-3.459v-2.19a3.457 3.457 0 0 1 2.554-3.338l1.868-.506a3.458 3.458 0 0 0 2.553-3.338v-1.889a3.46 3.46 0 0 1 2.142-3.198l2.958-1.218a3.458 3.458 0 0 0 1.616-5.031l-.154-.247a3.458 3.458 0 0 1 .713-4.485l3.309-2.768a3.46 3.46 0 0 0-.219-5.474l-1.763-1.25a3.456 3.456 0 0 1-1.458-2.821v-3.03a3.46 3.46 0 0 0-3.459-3.458h-1.59a3.386 3.386 0 0 1-3.03-1.874l-.001-.002a3.41 3.41 0 0 0-4.35-1.631l-2.813 1.159a1.646 1.646 0 0 1-1.978-.581l-.788-1.131a1.262 1.262 0 0 0-1.879-.218l-.002.002Z"
          ></path>
          <path
            fill="#f20d0d"
            fillOpacity=".25"
            d="M33.686 98.08c.311.526.48 1.132.48 1.756v5.196c0 1.408.849 2.65 2.107 3.183a3.434 3.434 0 0 1-.275-1.351v-5.195c0-.999-.432-1.95-1.185-2.606l-1.127-.983Zm-1.364-1.424a3.46 3.46 0 0 1 .413-4.076l1.679-1.857a3.458 3.458 0 0 0 .528-3.865 6070.76 6070.76 0 0 1-1.805-3.61 3.457 3.457 0 0 1 .349-3.65l2.958-3.859c.759-.99.926-2.313.436-3.461l-1.692-3.965a3.458 3.458 0 0 1 1.793-4.524l3.155-1.383a3.459 3.459 0 0 0 2.028-3.704l-.274-1.746a3.457 3.457 0 0 1 3.416-3.995h2.309a3.457 3.457 0 0 0 3.366-2.666l1.138-4.837a3.459 3.459 0 0 1 3.366-2.666h7.127a1.261 1.261 0 0 0 1.26-1.26v-.002a2.215 2.215 0 0 1 3.046-2.056l1.814.732a3.458 3.458 0 0 0 4.132-1.233l2.056-2.955a3.46 3.46 0 0 1 4.999-.726l2.425 1.94a3.462 3.462 0 0 0 2.858.687l2.389-.492a3.452 3.452 0 0 1 2.048.204 3.459 3.459 0 0 0-3.88-2.037l-2.39.492a3.456 3.456 0 0 1-2.857-.686l-2.425-1.94a3.457 3.457 0 0 0-4.999.725l-2.056 2.956a3.457 3.457 0 0 1-4.132 1.232l-1.814-.731a2.217 2.217 0 0 0-3.046 2.056v.001a1.263 1.263 0 0 1-1.261 1.261h-7.126a3.457 3.457 0 0 0-3.366 2.666l-1.138 4.836a3.459 3.459 0 0 1-3.366 2.666h-2.31a3.459 3.459 0 0 0-3.416 3.995l.274 1.746a3.459 3.459 0 0 1-2.027 3.704l-3.156 1.383a3.459 3.459 0 0 0-1.792 4.525l1.692 3.964a3.46 3.46 0 0 1-.437 3.462l-2.958 3.858a3.46 3.46 0 0 0-.349 3.651l1.805 3.609a3.458 3.458 0 0 1-.527 3.865 2380.7 2380.7 0 0 0-1.679 1.858 3.457 3.457 0 0 0 .292 4.925l1.127.983Z"
          ></path>
          <path
            fill="#fff"
            fillOpacity=".25"
            d="M118.606 65.557a3.458 3.458 0 0 1-1.005 3.901l-3.309 2.769a3.457 3.457 0 0 0-.714 4.485l.154.247c.54.863.672 1.921.36 2.89a3.454 3.454 0 0 1-1.975 2.14l-2.959 1.219a3.456 3.456 0 0 0-2.141 3.197v1.89a3.458 3.458 0 0 1-2.554 3.337l-1.868.507a3.458 3.458 0 0 0-2.554 3.337v2.191a3.458 3.458 0 0 1-3.458 3.458h-3.117a3.458 3.458 0 0 0-3.458 3.458v.845a3.458 3.458 0 0 1-4.004 3.415l-4.879-.781a3.458 3.458 0 0 0-3.887 2.52l-.121.452a3.458 3.458 0 0 1-4.128 2.472l-4.199-.981a2.369 2.369 0 0 0-2.616 1.167l-.001.002a2.614 2.614 0 0 1-3.378 1.121l-6.928-3.163a3.456 3.456 0 0 0-3.511.38l-2.102 1.576a3.456 3.456 0 0 1-3.239.49l.686 1.051a3.459 3.459 0 0 0 4.971.878l2.102-1.577a3.459 3.459 0 0 1 3.511-.379l6.929 3.163a2.616 2.616 0 0 0 3.378-1.122v-.001a2.37 2.37 0 0 1 2.617-1.168l4.199.982a3.458 3.458 0 0 0 4.127-2.473l.121-.451a3.458 3.458 0 0 1 3.887-2.52l4.879.78a3.457 3.457 0 0 0 4.005-3.415v-.844a3.458 3.458 0 0 1 3.458-3.458h3.117a3.459 3.459 0 0 0 3.458-3.459v-2.19a3.457 3.457 0 0 1 2.554-3.338l1.868-.506a3.458 3.458 0 0 0 2.553-3.338v-1.889a3.46 3.46 0 0 1 2.142-3.198l2.958-1.218a3.458 3.458 0 0 0 1.616-5.031l-.154-.247a3.458 3.458 0 0 1 .713-4.485l3.309-2.768a3.46 3.46 0 0 0-.219-5.474l-1.194-.846Zm-4.57-9.59c.082.296.124.604.124.917v3.03a3.46 3.46 0 0 0 1.458 2.821l1.194.846a3.462 3.462 0 0 1-.233-1.249v-3.03a3.46 3.46 0 0 0-2.543-3.335Z"
          ></path>
          <path
            fill="#eab11c"
            d="M91.273 69.326c3.687-5.021 6.269-6.706 10.482-6.987 2.767-.184 4.904.415 6.118 1.966 4.072 5.2-1.722 20.806-15.459 32.302-13.737 11.496-30.246 14.556-34.318 9.356-.562-.717-.897-1.593-1.021-2.6-1.002-8.127 9.455-12.323 12.272-14.071 3.061-1.899 6.213-4.177 9.327-6.784 5.123-4.287 9.428-8.862 12.599-13.182Z"
          ></path>
          <path
            fill="#f20d0d"
            fillOpacity=".25"
            d="M107.267 63.672c.222.19.425.401.606.633 4.072 5.2-1.722 20.806-15.459 32.302-13.737 11.496-30.246 14.556-34.318 9.356a4.526 4.526 0 0 1-.437-.672c7 1.691 20.576-2.131 32.243-11.563 12.47-10.08 18.695-23.283 17.365-30.056Z"
          ></path>
          <path
            fill="#e5f20d"
            fillOpacity=".25"
            d="M58.793 106.677a4.605 4.605 0 0 1-.697-.714c-.562-.717-.897-1.593-1.021-2.6-1.002-8.127 9.455-12.323 12.272-14.071 3.061-1.899 6.213-4.177 9.327-6.784 5.123-4.287 9.428-8.862 12.599-13.182 3.687-5.021 6.269-6.706 10.482-6.987 2.767-.184 4.904.415 6.118 1.966.639.816 1.035 1.888 1.196 3.159-1.262-1.106-3.174-1.526-5.553-1.368-4.213.281-6.795 1.966-10.481 6.987-3.172 4.321-7.476 8.895-12.6 13.183-3.114 2.606-6.266 4.884-9.326 6.784-2.766 1.716-12.894 5.791-12.316 13.627Z"
          ></path>
          <path
            fill="#eab11c"
            d="M79.323 63.497c5.164-3.485 6.07-7.61 6.518-11.809.294-2.758-.22-4.916-1.722-6.191-5.034-4.275-21.468.448-33.5 13.719-12.031 13.27-15.133 30.093-10.098 34.368.694.589 1.556.959 2.558 1.123 8.08 1.323 13.566-7.348 15.425-10.093 2.019-2.983 4.42-6.042 7.148-9.05 4.487-4.95 9.229-9.069 13.671-12.067Z"
          ></path>
          <path
            fill="#f20d0d"
            fillOpacity=".25"
            d="M85.911 49.811c-.729 3.565-2.351 6.997-6.973 9.996-5.051 3.276-10.442 7.778-15.543 13.188-3.102 3.288-5.831 6.63-8.127 9.89-1.847 2.623-6.845 10.193-14.208 11.092.585.365 1.262.606 2.019.73 8.08 1.323 13.566-7.348 15.425-10.093 2.019-2.983 4.42-6.042 7.148-9.05 4.487-4.95 9.229-9.069 13.671-12.067 5.164-3.485 6.07-7.61 6.518-11.809.071-.661.095-1.288.07-1.877Z"
          ></path>
          <path
            fill="#e5f20d"
            fillOpacity=".25"
            d="M43.104 94.711c-2.802-6.14.849-20.681 11.505-32.434C64.976 50.843 78.61 45.754 85.406 47.299a4.636 4.636 0 0 0-1.287-1.802c-5.034-4.275-21.468.448-33.5 13.719-12.031 13.27-15.133 30.093-10.098 34.368.694.589 1.556.959 2.558 1.123l.025.004Z"
          ></path>
          <path
            fill="#ec8818"
            d="M69.988 71.107a1.494 1.494 0 0 1-.431-1.188s.264-3.027-.247-6.37c-.322-2.102-.934-4.349-2.198-5.956a1.5 1.5 0 0 1 2.357-1.855c1.569 1.994 2.407 4.75 2.806 7.357.336 2.199.37 4.276.341 5.606a79.97 79.97 0 0 0-2.628 2.406zM56.567 87.376a1.5 1.5 0 0 1-1.081-1.78s1.915-8.293-1.004-14.13a1.5 1.5 0 0 1 2.683-1.342c2.391 4.782 1.994 11.003 1.578 14.138l-.239.352c-.444.655-1.094 1.648-1.937 2.762zm14.379.895a33.723 33.723 0 0 1 4.885-.585c2.965-.119 6.142.265 8.529 1.708a1.501 1.501 0 0 1-1.552 2.567c-1.914-1.157-4.479-1.373-6.856-1.277-3.808.154-7.188 1.179-7.188 1.179a1.5 1.5 0 0 1-1.916-1.192c1.041-.568 1.928-1.024 2.499-1.379a69.622 69.622 0 0 0 1.599-1.021zm15.768-13.422c.976-.29 2.115-.568 3.322-.747 2.504-.369 5.284-.289 7.609.858a1.502 1.502 0 0 1-1.328 2.691c-1.783-.88-3.923-.864-5.843-.581-3.089.456-5.66 1.66-5.66 1.66a1.501 1.501 0 0 1-1.649-.249 79.678 79.678 0 0 0 3.549-3.632z"
          ></path>
        </svg>
        <h1 className="chat font-rowdies font-bold text-6xl text-upright uppercase text-green-700">
          chat
        </h1>
      </figure>
      <form className="w-72" onSubmit={registerUser}>
        <input
          type="text"
          placeholder="username.."
          className="block w-full p-2 mb-2 rounded-sm outline-green-500"
          onChange={(e) =>
            updateRegister({ ...register, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="email.."
          className="block w-full p-2 mb-2 rounded-sm outline-green-500"
          onChange={(e) =>
            updateRegister({ ...register, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="password"
          className="block w-full p-2 mb-2 rounded-sm outline-green-500"
          onChange={(e) =>
            updateRegister({ ...register, password: e.target.value })
          }
        />
        <button
          type="submit"
          className="w-full rounded-sm bg-green-600 text-white p-2 mb-2"
        >
          {isRegisterLoading ? 'Creating User...' : 'register'}
        </button>
        {registerError?.error && (
          <div className="bg-red-200 p-4 rounded-sm text-center">
            <p>{registerError?.message}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Register;

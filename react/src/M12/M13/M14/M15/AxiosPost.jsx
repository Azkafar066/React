import { useState } from "react";
import axios from "axios";
const SimpleUserForm = () => {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [respnsData,setResponseData] = useState(null);
const [error,setError] = useState(null);
const handleSubmit = (e) => {
e.preventDefault();


axios
.post("")
}
}
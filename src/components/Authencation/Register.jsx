import React, { useState } from "react";
import axios from "axios";
import Logo from "../../assets/images/timi_logo.jpg";
import {
  Container,
  SignUpContainer,
  SignInContainer,
  Form,
  Title,
  Input,
  Button,
  GhostButton,
  Anchor,
  OverlayContainer,
  Overlay,
  LeftOverlayPanel,
  RightOverlayPanel,
  Paragraph,
} from "./Components";
import "./info.css";
import { NavLink, useNavigate } from "react-router-dom";

const regionsAndDistricts = {
  Qoraqalpoq: ["Amudaryo tumani", "Beruniy tumani", "Bozatu tumani", "Kegeyli tumani", "Qonliko'l tumani", "Qorauzak tumani", "Qo'ng'irot tumani", "Muynoq tumani", "Nukus tumani", "Taxtako'prik tumani", "Taxiatosh tumani", "To'ryko'l tumani", "Xo'jayli tumani", "Xo'jayli tumani", "Chimboy tumani", "Shumanay tumani", "Ellikqala tumani", "Nukus shahri"],
  Qashqadaryo: ["G'uzor tumani", "Qarshi tumani", "Qamashi tumani", "Ko'kdala tumani", "Chiroqchi tumani", "Mirishkor tumani", "Koson tumani", "Kasbi tumani", "kitob tumani", "Muborak tumani", "Shaxrizabiz tumani", "Nishon tumani", "Qarshi shahri", "SHahrizabiz shahri"],
  Surxandaryo: ["Angor tumani", "Denov tumani", "Boysun tumani", "Jarqurg'on tumani", "Sherobod tumani", "Qiziriq tumani", "Qumqo'rg'on tumani", "Mizrabot tumani", "Sarosiyo tumani", "Termiz tumani", "Uzun tumani", "Sho'rchi tumani", "Bandixon tumani", "Termiz shahri"],
  Toshkent_v: ["Bekobot tumani", "Bo'ka tumani", "Bo'stonliq tumani", "Zangiota tumani", "Oqqo'rg'on tumani", "Ohangaron tumani", "Parkent tumani", "Piskent tumani", "Chinoz tumani", "Yuqori-chirchiq tumani", "Yangiyo'l tumani", "Yuqori-chirchiq tumani", "O'rta chirchiq", "Yangiyo'l tumani", "Qibray tumani", "O'rta-chirchiq tumani", "Angren shahri", "Olmaliq shahri", "Chirchiq shahri", "Ohangaron shahri", "Yangiyo'l shahri", "Toshkent tumani"],
  Toshkent_sh: ["Mirobod tumani", "Mirzo-Ulug'bek tumani", "Yunusobot tumani", "Yakkasaroy tumani", "Shayhontoxur tumani", "Chilonzor tumani", "Sirg'ali tumani", "Yashnabot tumani", "Olmazor tumani", "Uchtepa tumani", "Bektemir tumani", "Yangihayot tumani"],
  Buxoro: ["Buxoro shahri", "Kogon shahri", "Galaosiyo shahri", "Vobkent shahri", "Gazli shahri", "Olot shahri", "Romitan shahri", "Shofirkon shahri", "Qorakoʻl shahri", "Qorovulbozor shahri", "Gʻijduvon shahri", "Vobkent tumani", "Jondor tumani", "Kogon tumani", "Olot tumani", "Peshkoʻ tumani", "Romitan tumani", "Shofirkon tumani", "Qorovulbozor tumani", "Qorakoʻl tumani", "Gʻijduvon tumani"],
  Samarqand: ["Samarqand shahri", "Kattaqoʻrgʻon shahri", "Bulungʻur tumani", "Jomboy tumani", "Ishtixon tumani", "Kattaqoʻrgʻon tumani", "Narpay tumani", "Nurobod tumani", "Oqdaryo tumani", "Payariq tumani", "Pastdargʻom tumani", "Paxtachi tumani", "Toyloq tumani", "Urgut tumani", "Qoʻshrabot tumani"],
  Jizzax: ["Jizzax shahri", "Zarafshon shahri", "Arnasoy tumani", "Baxmal tumani", "Do'stlik tumani", "Forish tumani", "G'allaorol tumani", "Jizzax tumani", "Mirzacho'l tumani", "Paxtakor tumani", "Yangiobod tumani", "Zafarobod tumani", "Zarband tumani", "Zomin tumani"],
  Andijon: ["Andijon shahri", "Xonobod shahri", "Andijon tumani", "Asaka tumani", "Baliqchi tumani", "Bo'z tumani", "Buloqboshi tumani", "Izboskan tumani", "Jalolquduq tumani", "Marhamat tumani", "Oltinko'l tumani", "Paxtaobod tumani", "Qo'rg'ontepa tumani", "Shahrixon tumani", "Ulug'nor tumani", "Xo'jaobod tumani"],
  Namangan: ["Namangan shahri", "Chortoq tumani", "Chust tumani", "Kosonsoy tumani", "Mingbuloq tumani", "Norin tumani", "Pop tumani", "To'raqo'rg'on tumani", "Uchqo'rg'on tumani", "Uychi tumani", "Yangiqo'rgon tumani"],
  Fargona: ["Fargʻona shahri", "Marg'ilon shahri", "Qo'qon shahri", "Quvasoy shahri", "Beshariq tumani", "Bog'dod tumani", "Buvayda tumani", "Dang'ara tumani", "Farg'ona tumani", "Furqat tumani", "O'zbekiston tumani", "Oltiariq tumani", "Qo'shtepa tumani", "Quva tumani", "Rishton tumani", "So'x tumani", "Toshloq tumani", "Uchko'prik tumani", "Yozyovon tumani"],
  Navoiy: ["Navoiy shahri", "Zarafshon shahri", "Karmana tumani", "Konimex tumani", "Navbahor tumani", "Nurota tumani", "Qiziltepa tumani", "Tomdi tumani", "Uchquduq tumani", "Xatirchi tumani"],
  Sirdaryo: ["Guliston shahri", "Shirin shahri", "Yangiyer shahri", "Boyovut tumani", "Guliston tumani", "Oqoltin tumani", "Sardoba tumani", "Sayxunobod tumani", "Sirdaryo tumani", "Xovos tumani"],
};

function Registration() {
  const [signIn, setSignIn] = useState(true);
  const [role, setRole] = useState("center");
  const [username, setUsername] = useState("");
  const [tashkilot, setTashkilot] = useState("")
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [districts, setDistricts] = useState([]);
  const navigate = useNavigate();
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const onRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    setDistricts(regionsAndDistricts[region] || []);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }

    const userData = {
      username,
      full_name: fullName,
      phone_number: phoneNumber,
      email,
      password,
      role,
      region: selectedRegion,
      district: selectedDistrict,
    };

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/user/register/", userData);
      console.log("Registration successful:", response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        setError(error.response.data);
      } else {
        setError("There was an error registering the user.");
      }
    }
  };



  return (
    <div className="mt-[20px]">
      <NavLink to={"/"}>
        <div className="flex items-center justify-center mb-[25px]">
          <img className="w-[70px] h-[70px] rounded-[50%]" src={Logo} alt="" />
          <h1 className="text-[#2D3663] text-[24px] font-bold max-w-[100px] pl-3">
            TIMII IT <span className="pl-3">DTM</span>
          </h1>
        </div>
      </NavLink>
      <div className="hero">
        <Container>
          <SignUpContainer signingIn={signIn}>
            <Form onSubmit={onSubmit}>
              <h1 className="text-[24px] text-[#ccc] font-bold mb-3">Ro'yxatdan o'tish turini tanlang</h1>
              {error && <div className="error">{JSON.stringify(error)}</div>}
              <div>
                <select className="w-full max-w-[250px] p-3 pr-[20px] mb-4" name="role" id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="center">O'quv markaz</option>
                  <option value="student">O'quvchi</option>
                </select>
              </div>
              {role === "center" && (
                <>
                  <div className="flex items-center justify-between w-[100%] max-w-[600px] gap-3">
                    <Input value={tashkilot} onChange={(e) => setTashkilot(e.target.value)} type="text" placeholder="Ташкилот номи:" />
                    <Input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Фойдаланувчи Ф.И.Ш:" />
                  </div>
                </>
              )}
              <div className="flex items-center justify-between w-[100%] max-w-[600px] gap-3">
                {role === "student" && <Input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Фойдаланувчи Ф.И.Ш:" />}
                <Input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="Телефон рақами:" />
              </div>
              <div className="flex items-center justify-between w-[100%] max-w-[600px] gap-3 mt-3">
                <select className="w-full max-w-[300px] p-3 pr-[20px]" value={selectedRegion} onChange={onRegionChange}>
                  <option value="">Viloyat</option>
                  {Object.keys(regionsAndDistricts).map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                <select className="w-full max-w-[300px] p-3 pr-[20px]" name="district" id="district" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                  <option value="">Tuman</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center justify-between w-[100%] max-w-[600px] gap-3 mb-3 mt-3">
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
              </div>
              <Button type="submit">Sign Up</Button>
            </Form>
          </SignUpContainer>
          <SignInContainer signingIn={signIn}>
            <Form>
              <Title>Sign in</Title>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Anchor href="#">Forgot your password?</Anchor>
              <Button type="submit">Sign In</Button>
            </Form>
          </SignInContainer>
          <OverlayContainer signingIn={signIn}>
            <Overlay signingIn={signIn}>
              <LeftOverlayPanel signingIn={signIn}>
                <Title>Welcome Back!</Title>
                <Paragraph>To keep connected with us please login with your personal info</Paragraph>
                <GhostButton onClick={() => setSignIn(true)}>Sign In</GhostButton>
              </LeftOverlayPanel>
              <RightOverlayPanel signingIn={signIn}>
                <Title>Hello, Friend!</Title>
                <Paragraph>Enter your personal details and start journey with us</Paragraph>
                <GhostButton onClick={() => setSignIn(false)}>Sign Up</GhostButton>
              </RightOverlayPanel>
            </Overlay>
          </OverlayContainer>
        </Container>
      </div>
    </div>
  );
}

export default Registration;


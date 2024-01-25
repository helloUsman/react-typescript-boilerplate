import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "src/utils/translations/Translator";
import { useNavigate } from "react-router-dom";
import { AllRoutes } from "src/routing/Routes";

interface FormProps {
  onSave?: (data: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  country: string;
}

const FormContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const UserInfo: React.FC<FormProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    country: "Select Country"
  });

  const countries = ["USA", "Canada", "UK", "Germany", "France", "Japan"];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: keyof FormData
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      country: "Select Country"
    });
    navigate(AllRoutes.BOILERPLATE_ROOT);
  };

  return (
    <FormContainer>
      <InputWrapper>
        <Label>First Name</Label>
        <Input
          type="text"
          value={formData.firstName}
          onChange={(e) => handleInputChange(e, "firstName")}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Last Name</Label>
        <Input
          type="text"
          value={formData.lastName}
          onChange={(e) => handleInputChange(e, "lastName")}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>{t("EMAIL")}</Label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Number</Label>
        <Input
          type="tel"
          value={formData.number}
          onChange={(e) => handleInputChange(e, "number")}
        />
      </InputWrapper>

      <InputWrapper>
        <Label>Country</Label>
        <Select value={formData.country} onChange={(e) => handleInputChange(e, "country")}>
          <option disabled>Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </InputWrapper>

      <Button type="submit" onClick={handleSave}>
        Save
      </Button>
    </FormContainer>
  );
};

export default UserInfo;

import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="firstName">
        <FormLabel>First Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Raj" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder="Shekhar"
        />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder="(91) 99677-89089"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="xyz@example.com"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>City</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select State">
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="	Assam"> Assam</option>
          <option value="		Bihar"> Bihar</option>
          <option value="		Chhattisgarh"> Chhattisgarh</option>
          <option value="	Delhi"> Delhi</option>
          <option value="	Goa"> Goa</option>
          <option value="	Gujarat"> Gujarat</option>
          <option value="	Haryana"> Haryana</option>
          <option value="	Himachal Pradesh"> Himachal Pradesh</option>
          <option value="		Jammu and Kashmir"> Jammu and Kashmir</option>
          <option value="	Jharkhand"> Jharkhand</option>
          <option value="	Karnataka"> Karnataka</option>
          <option value="	Kerala"> Kerala</option>
          <option value="Delhi" selected>
            Delhi
          </option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="	Manipur"> Manipur</option>
          <option value="	Meghalaya"> Meghalaya</option>
          <option value="	Mizoram"> Mizoram</option>
          <option value="		Nagaland"> Nagaland</option>
          <option value="	Orissa"> Orissa</option>
          <option value="	Punjab"> Punjab</option>
          <option value="	Rajasthan"> Rajasthan</option>
          <option value="		Sikkim"> Sikkim</option>
          <option value="	Tamil Nadu"> Tamil Nadu</option>
          <option value="	Telangana"> Telangana</option>
          <option value="	Tripura"> Tripura</option>
          <option value="		Uttar Pradesh"> Uttar Pradesh</option>
          <option value="	Uttarakhand"> Uttarakhand</option>
          <option value="		West Bengal"> West Bengal</option>
        </Select>
      </FormControl>
      <FormControl id="country">
        <FormLabel>Country</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select country">
          <option value="India" selected>
            India
          </option>
        </Select>
      </FormControl>
    </Grid>
  )
}

export default AccountSettings

import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Details = ({ detail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = detail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px" }}
      alignItems="center"
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack
            direction="row"
            gap="25px"
            alignItems="center"
            key={`extraDetail-${index}`}
          >
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
              key={`button-${item.name}-${index}`}
            >
              <img
                src={item?.icon}
                alt={item.name}
                key={`image-${item.name}-${index}`}
              />
            </Button>
            <Typography
              variant="h5"
              sx={{ textTransform: "capitalize", fontWeight: "bold" }}
              key={`typography-${item.name}-${index}`}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;

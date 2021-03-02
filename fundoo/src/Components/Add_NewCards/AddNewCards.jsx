import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
// import clsx from "clsx";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Icons from '../../Components/CardIcons/CardIcon'
import "./AddNewCards.css";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    backgroundColor: "white",

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  noExtend: {
    display: "none",
  },
}));
const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border: 0;
      color: black;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
    .MuiOutlinedInput-input {
      padding: 0;
    }
  }
`;

export default function AddCard() {
  const classes = useStyles();

  const [openCard, setOpenCards] = useState(false);
  const handleAddCard = () => {
    setOpenCards(true);
  };
  const handleClose = () => {
    setOpenCards(false);
  };

  return (
    <div>
      <div className={classes.toolbar}></div>

      <div className="main">
        <div>
          <div className={openCard ? "extendCard" : "noExtend"}>
            <StyledTextField
              placeholder="Title"
              variant="outlined"
              fullWidth={true}
            />
          </div>

          <div onClick={handleAddCard} className="descriptionField">
            <StyledTextField
              placeholder="Take a note"
              variant="outlined"
              fullWidth={true}
            />
          </div>
          <div className={openCard ? "showsIcons" : "noExtend"}>
            <div>
<Icons/>
            </div>
            <div>
            <Button onClick={handleClose} focusVisible={false}>
              close
            </Button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

//   function Extendcard(props) {
//     if (!props.extend) {
//       return null;
//     }
//     return <div className="extendCard">newcards</div>;
//   }
// }

/* <div
className={clsx(classes.toggle, { */
//   [classes.noExtend]: !openCard,
// })}
// >

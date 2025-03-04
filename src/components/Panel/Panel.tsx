import React, { ReactNode } from "react";
import { WithStyles, withStyles } from "@material-ui/core";

interface PanelProps extends WithStyles, React.HTMLAttributes<HTMLDivElement> {
  headerText: string;
  children: ReactNode
}

const styles = {
  pannelWrapper: {
    backgroundColor: "white",
    padding: "3px",
    width: "97%",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
    marginTop: "10px"
  },
  panelHeaderWrapper: {
    textAlign: "left" as const,
    borderBottom: "solid 1px black",
  },
  panelHeader: {
    marginLeft: "20px"
  },
  panelBody: {}
};

const PanelComponent = (props: PanelProps) => {
  const { classes, headerText, children } = props;

  return (
    <div className={classes.pannelWrapper} {...props}>
      <div className={classes.panelHeaderWrapper}>
        <h1 className={classes.panelHeader}>{ headerText }</h1>
      </div>      
      <div className={classes.panelBody}>{ children }</div>
    </div>
  )
};

const Panel = withStyles(styles)(PanelComponent);

export { Panel }
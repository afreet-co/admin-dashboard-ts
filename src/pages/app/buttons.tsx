import React from "react";
import { Button } from "../../components/buttons/Button";
import { Card } from "../../components/cards/Card";
import { Heading } from "../../components/headings/Heading";
import { Spinner } from "../../components/svgs/Spinner";
import { classes } from "../../configs/classnames";
import { DashboardLayout } from "../../layouts/DashboardLayout";

const Buttons = () => {
  return (
    <DashboardLayout>
      <Heading title="Buttons" />
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
        <Card width="half">
          <div className="space-y-4">
            <h4 className={`font-semibold mb-4 ${classes.textBase}`}>Size</h4>
            <div className="flex flex-col items-center justify-between space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center ">
              <Button size="small" type="button">
                Small
              </Button>
              <Button size="regular" type="button">
                Regular
              </Button>
              <Button size="large" type="button">
                Large
              </Button>
            </div>
          </div>
        </Card>
        <Card width="half">
          <h4 className={`font-semibold mb-4 ${classes.textBase}`}>Color</h4>
          <div className="flex flex-col items-center justify-between space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center ">
            <Button size="regular" color="light" type="button">
              Light
            </Button>
            <Button size="regular" color="normal" type="button">
              Normal
            </Button>
            <Button size="regular" color="dark" type="button">
              Dark
            </Button>
          </div>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
        <Card width="half">
          <div className="space-y-4">
            <h4 className={`font-semibold mb-4 ${classes.textBase}`}>Icon</h4>
            <div className="flex flex-col items-center justify-between space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center ">
              <Button size="small" type="button">
                <i className={`fas fa-asterisk`}></i> Small
              </Button>
              <Button size="regular" type="button">
                <i className="fab fa-atlassian"></i> Regular
              </Button>
              <Button size="large" type="button">
                <i className="fas fa-bullhorn"></i> Large
              </Button>
            </div>
          </div>
        </Card>
        <Card width="half">
          <h4 className={`font-semibold mb-4 ${classes.textBase}`}>Spinner</h4>
          <div className="flex flex-col items-center justify-between space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center ">
            <Button
              size="regular"
              color="light"
              type="button"
              classNames="inline-flex items-center "
            >
              <Spinner
                className={`-ml-1 mr-2 h-5 w-5 ${classes.textBaseInverted}`}
              />
              Light
            </Button>
            <Button
              size="regular"
              color="normal"
              type="button"
              classNames="inline-flex items-center "
            >
              <Spinner
                className={`-ml-1 mr-2 h-5 w-5 ${classes.textBaseInverted}`}
              />
              Normal
            </Button>
            <Button
              size="regular"
              color="dark"
              type="button"
              classNames="inline-flex items-center "
            >
              <Spinner
                className={`-ml-1 mr-2 h-5 w-5 ${classes.textBaseInverted}`}
              />
              Dark
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Buttons;

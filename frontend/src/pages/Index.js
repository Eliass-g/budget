import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "../layouts/dashboard/layout";
import { OverviewBudget } from "../sections/overview/overview-budget";
import { OverviewLatestOrders } from "../sections/overview/overview-latest-orders";
import { OverviewSales } from "../sections/overview/overview-sales";
import { OverviewTasksProgress } from "../sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "../sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "../sections/overview/overview-total-profit";
import { OverviewTraffic } from "../sections/overview/overview-traffic";
import { Helmet, HelmetProvider } from "react-helmet-async";

const now = new Date();

const Page = () => (
  <>
    <DashboardLayout>
      <HelmetProvider>
        <Helmet>
          <title>Overview | Finance App</title>
        </Helmet>
      </HelmetProvider>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="$24k"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalCustomers
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value="1.6k"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTasksProgress sx={{ height: "100%" }} value={75.5} />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalProfit sx={{ height: "100%" }} value="$22.4k" />
            </Grid>
            <Grid xs={12} lg={8}>
              <OverviewSales
                chartSeries={[
                  {
                    name: "Allocated Amount",
                    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                  },
                  {
                    name: "Spent",
                    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewTraffic
                chartSeries={[63, 15, 22]}
                labels={["Rent", "Food", "Micellanious"]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6} lg={4}></Grid>
            <Grid xs={12} md={12} lg={8}>
              <OverviewLatestOrders
                orders={[
                  {
                    id: "f69f88012978187a6c12897f",
                    ref: "DEV1049",
                    amount: 30.5,
                    customer: {
                      name: "Uber Eats",
                    },
                    createdAt: "04/01/2024",
                    status: "pending",
                  },
                  {
                    id: "9eaa1c7dd4433f413c308ce2",
                    ref: "DEV1048",
                    amount: 25.1,
                    customer: {
                      name: "Gas",
                    },
                    createdAt: "04/01/2024",
                    status: "delivered",
                  },
                  {
                    id: "01a5230c811bd04996ce7c13",
                    ref: "DEV1047",
                    amount: 10.99,
                    customer: {
                      name: "Amazon Purcahse - Socks",
                    },
                    createdAt: "03/01/2024",
                    status: "refunded",
                  },
                  {
                    id: "1f4e1bd0a87cea23cdb83d18",
                    ref: "DEV1046",
                    amount: 96.43,
                    customer: {
                      name: "Groceries",
                    },
                    createdAt: "03/01/2024",
                    status: "pending",
                  },
                  {
                    id: "9f974f239d29ede969367103",
                    ref: "DEV1045",
                    amount: 32.54,
                    customer: {
                      name: "Phone Bill",
                    },
                    createdAt: "03/01/2024",
                    status: "delivered",
                  },
                  {
                    id: "ffc83c1560ec2f66a1c05596",
                    ref: "DEV1044",
                    amount: 16.76,
                    customer: {
                      name: "Gloves",
                    },
                    createdAt: "03/01/2024",
                    status: "delivered",
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </DashboardLayout>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

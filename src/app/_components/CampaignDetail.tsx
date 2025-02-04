"use client";

import { trpc } from "../_trpc/client";
import { Card, Typography } from "@mui/material";
import { useState } from "react";

export default function CampaignDetail({ campaignId }: { campaignId: string }) {
  const { data, isLoading, error } = trpc.getCampaign.useQuery(campaignId);

  if (isLoading) return <Typography>Loading campaign...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Card style={{ padding: "16px", marginBottom: "8px" }}>
      <Typography variant="h5">Campaign {data._id}</Typography>
      <Typography>Spend: ${data.spend.toFixed(2)}</Typography>
      <Typography>Conversions: {data.conversions}</Typography>
      <Typography>
        ROI:{" "}
        {data.spend > 0
          ? ((data.conversions * 100) / data.spend).toFixed(2)
          : "N/A"}
        %
      </Typography>
    </Card>
  );
}

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FinalRankingChart = () => {
  return (
    <div className="mt-10">
      <Table>
        <TableCaption>Final Ranking.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Winner</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Score</TableHead>
            <TableHead className="text-right">Prize</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default FinalRankingChart;

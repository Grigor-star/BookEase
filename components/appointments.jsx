/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/QzCiFZ3FZI0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Arimo } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

arimo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "2023-07-15",
      time: "10:00 AM",
      patient: "John Doe",
      reason: "Routine checkup",
      status: "upcoming",
    },
    {
      id: 2,
      date: "2023-07-16",
      time: "2:30 PM",
      patient: "Jane Smith",
      reason: "Follow-up visit",
      status: "upcoming",
    },
    {
      id: 3,
      date: "2023-07-10",
      time: "9:00 AM",
      patient: "Michael Johnson",
      reason: "Flu shot",
      status: "past",
    },
    {
      id: 4,
      date: "2023-07-12",
      time: "11:45 AM",
      patient: "Sarah Lee",
      reason: "Annual physical",
      status: "cancelled",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [statusFilter, setStatusFilter] = useState("all");
  const filteredAppointments = useMemo(() => {
    let filtered = appointments.filter((appointment) => {
      return (
        appointment.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appointment.reason.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    if (dateRange.start && dateRange.end) {
      filtered = filtered.filter((appointment) => {
        const appointmentDate = new Date(appointment.date);
        const startDate = new Date(dateRange.start);
        const endDate = new Date(dateRange.end);
        return appointmentDate >= startDate && appointmentDate <= endDate;
      });
    }
    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (appointment) => appointment.status === statusFilter
      );
    }
    return filtered.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [appointments, searchTerm, sortKey, sortOrder, dateRange, statusFilter]);
  return (
    <div className="p-6 w-full sm:p-10">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold">Upcoming Appointments</h1>
          <p className="text-muted-foreground">
            Manage and view your upcoming appointments.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <Input
            placeholder="Search appointments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-col items-start w-full h-auto md:w-auto"
                >
                  <span className="font-semibold uppercase text-[0.65rem]">
                    Date Range
                  </span>
                  <span className="font-normal">
                    {dateRange.start ? dateRange.start : "Start Date"} -{" "}
                    {dateRange.end ? dateRange.end : "End Date"}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 max-w-[276px]">
                <Calendar
                  mode="range"
                  value={[
                    dateRange.start ? new Date(dateRange.start) : null,
                    dateRange.end ? new Date(dateRange.end) : null,
                  ]}
                  onValueChange={([start, end]) => {
                    setDateRange({
                      start: start?.toISOString().split("T")[0] || "",
                      end: end?.toISOString().split("T")[0] || "",
                    });
                  }}
                />
              </PopoverContent>
            </Popover>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="h-auto">
                <SelectValue
                  placeholder={
                    <div className="flex flex-col items-start">
                      <span className="font-semibold uppercase text-[0.65rem]">
                        Status
                      </span>
                      <span className="font-normal">
                        {statusFilter === "all"
                          ? "All"
                          : statusFilter.charAt(0).toUpperCase() +
                            statusFilter.slice(1)}
                      </span>
                    </div>
                  }
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="past">Past</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-col items-start w-full h-auto md:w-auto"
                >
                  <span className="font-semibold uppercase text-[0.65rem]">
                    Sort By
                  </span>
                  <span className="font-normal">
                    {sortKey.charAt(0).toUpperCase() + sortKey.slice(1)}(
                    {sortOrder === "asc" ? "Ascending" : "Descending"})
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup
                  value={sortKey}
                  onValueChange={setSortKey}
                >
                  <DropdownMenuRadioItem value="date">
                    Date
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="time">
                    Time
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="patient">
                    Patient
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="reason">
                    Reason
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={sortOrder}
                  onValueChange={setSortOrder}
                >
                  <DropdownMenuRadioItem value="asc">
                    Ascending
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="desc">
                    Descending
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead className="w-[100px]">Time</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAppointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.patient}</TableCell>
                  <TableCell>{appointment.reason}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        appointment.status === "upcoming"
                          ? "outline"
                          : appointment.status === "past"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {appointment.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

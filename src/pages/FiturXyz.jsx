import PageHeader from "../components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function FiturXyz() {
  return (
    <div className="p-8 font-sans">
      {/* Page Header */}
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "Order List"]} />

      {/* Main Content */}
      <div id="dashboard-container" className="mt-6">
        <div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          <p className="text-lg text-gray-700">Ini Halaman Fitur Xyz</p>

          <Button>Simpan </Button>
          <Button variant="outline" className="ml-2">
            Batal
          </Button>
          <Button variant="destructive" className="ml-2">
            Hapus
          </Button>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

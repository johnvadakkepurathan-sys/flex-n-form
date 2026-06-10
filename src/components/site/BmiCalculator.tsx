import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calculator } from "lucide-react";

type Result = { bmi: number; category: string; color: string } | null;

function categorize(bmi: number) {
  if (bmi < 18.5) return { category: "Underweight", color: "text-[oklch(0.78_0.17_75)]" };
  if (bmi < 25) return { category: "Normal", color: "text-[oklch(0.7_0.18_145)]" };
  if (bmi < 30) return { category: "Overweight", color: "text-[oklch(0.78_0.17_55)]" };
  return { category: "Obese", color: "text-primary" };
}

export function BmiCalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [lbs, setLbs] = useState("");
  const [result, setResult] = useState<Result>(null);

  const calc = () => {
    let h = 0;
    let w = 0;
    if (unit === "metric") {
      h = parseFloat(heightCm) / 100;
      w = parseFloat(weightKg);
    } else {
      const totalIn = parseFloat(feet || "0") * 12 + parseFloat(inches || "0");
      h = totalIn * 0.0254;
      w = parseFloat(lbs) * 0.453592;
    }
    if (!h || !w || h <= 0 || w <= 0) {
      setResult(null);
      return;
    }
    const bmi = w / (h * h);
    if (!isFinite(bmi)) return;
    setResult({ bmi: Math.round(bmi * 10) / 10, ...categorize(bmi) });
  };

  return (
    <Card className="bg-card border-border p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-primary shadow-glow">
          <Calculator className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-display text-2xl tracking-wider">BMI Calculator</h3>
          <p className="text-sm text-muted-foreground">Check your Body Mass Index (BMI) to see if your weight is in a healthy range and track your fitness journey.</p>
        </div>
      </div>

      <Tabs value={unit} onValueChange={(v) => setUnit(v as "metric" | "imperial")}>
        <TabsList className="grid grid-cols-2 w-full bg-secondary">
          <TabsTrigger value="metric">Metric (cm / kg)</TabsTrigger>
          <TabsTrigger value="imperial">Imperial (ft / lbs)</TabsTrigger>
        </TabsList>

        <TabsContent value="metric" className="mt-4 space-y-4">
          <div>
            <Label htmlFor="h-cm">Height (cm)</Label>
            <Input id="h-cm" type="number" inputMode="decimal" placeholder="175" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="w-kg">Weight (kg)</Label>
            <Input id="w-kg" type="number" inputMode="decimal" placeholder="72" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} />
          </div>
        </TabsContent>

        <TabsContent value="imperial" className="mt-4 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="ft">Feet</Label>
              <Input id="ft" type="number" inputMode="decimal" placeholder="5" value={feet} onChange={(e) => setFeet(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="in">Inches</Label>
              <Input id="in" type="number" inputMode="decimal" placeholder="9" value={inches} onChange={(e) => setInches(e.target.value)} />
            </div>
          </div>
          <div>
            <Label htmlFor="lbs">Weight (lbs)</Label>
            <Input id="lbs" type="number" inputMode="decimal" placeholder="160" value={lbs} onChange={(e) => setLbs(e.target.value)} />
          </div>
        </TabsContent>
      </Tabs>

      <Button onClick={calc} className="mt-5 w-full bg-gradient-primary uppercase tracking-wider font-semibold">
        Calculate BMI
      </Button>

      {result && (
        <div className="mt-6 rounded-lg border border-border bg-secondary/50 p-5 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Your BMI</p>
          <p className="font-display text-5xl mt-1">{result.bmi}</p>
          <p className={`mt-1 font-semibold uppercase tracking-wider ${result.color}`}>{result.category}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Underweight &lt; 18.5 • Normal 18.5–24.9 • Overweight 25–29.9 • Obese 30+
          </p>
        </div>
      )}
    </Card>
  );
}

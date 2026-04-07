export const exportJSON = (data) => {
    if (!data.length) return;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "data.json";
    a.click();
};

export const exportCSV = (data) => {
    if (!data.length) return;
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((d) => Object.values(d).join(",")).join("\n");
    const blob = new Blob([headers + "\n" + rows], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "data.csv";
    a.click();
};
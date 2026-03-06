"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { sections } from "@/lib/data";
import {
  Link, Sparkles, Rocket, BookOpen, Shield, GitBranch,
  Lock, Cloud, Brain, ArrowRight, FileText, Hammer,
  Users, Code, Wrench, Search, ExternalLink, Github,
  Star, ChevronUp, Menu, X,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "useful-links": Link, "whats-new": Sparkles, quickstarts: Rocket,
  tutorials: BookOpen, security: Shield, repositories: GitBranch,
  "private-pools": Lock, "cloud-deploy": Cloud, "ai-ml": Brain,
  migration: ArrowRight, articles: FileText, builders: Hammer,
  "community-builders": Users, templates: Code, tools: Wrench,
};

function getDomain(url: string) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "";
  }
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return sections;
    const q = query.toLowerCase();
    return sections
      .map((s) => ({
        ...s,
        resources: s.resources.filter(
          (r) =>
            r.title.toLowerCase().includes(q) ||
            r.description?.toLowerCase().includes(q) ||
            r.url.toLowerCase().includes(q) ||
            s.title.toLowerCase().includes(q)
        ),
      }))
      .filter((s) => s.resources.length > 0);
  }, [query]);

  const totalResources = sections.reduce((a, s) => a + s.resources.length, 0);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-blue-500" />
              <h1 className="text-lg font-bold">Awesome Cloud Build</h1>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              {totalResources} resources
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Timtech4u/awesome-cloudbuild"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://github.com/Timtech4u/awesome-cloudbuild"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline" className="gap-1.5">
                <Star className="h-3.5 w-3.5" />
                Star
              </Button>
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 border-r bg-background pt-16 transition-transform lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:translate-x-0 lg:pt-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="h-full overflow-y-auto p-4 space-y-0.5">
            <p className="px-2 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Categories
            </p>
            {sections.map((s) => {
              const Icon = iconMap[s.id] || Link;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`w-full flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted ${
                    activeSection === s.id ? "bg-muted font-medium" : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{s.title}</span>
                  <Badge variant="outline" className="ml-auto text-[10px] px-1.5 py-0">
                    {s.resources.length}
                  </Badge>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 px-4 py-6 lg:px-8">
          {/* Hero */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Google Cloud Build Resources
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-6">
              A curated collection of high-signal resources for Google Cloud Build in 2026:
              CI, triggers, private pools, Artifact Registry, supply chain security, and modern delivery pipelines.
            </p>
            <div className="relative max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {query && (
              <p className="mt-2 text-sm text-muted-foreground">
                {filtered.reduce((a, s) => a + s.resources.length, 0)} results for &ldquo;{query}&rdquo;
              </p>
            )}
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {filtered.map((section) => {
              const Icon = iconMap[section.id] || Link;
              return (
                <section key={section.id} id={section.id} className="scroll-mt-20">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="h-5 w-5 text-blue-500" />
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {section.resources.length}
                    </Badge>
                  </div>
                  {section.description && (
                    <p className="text-sm text-muted-foreground mb-3 max-w-2xl">
                      {section.description}
                    </p>
                  )}
                  <Separator className="mb-4" />
                  <div className="grid gap-2">
                    {section.resources.map((r, i) => (
                      <a
                        key={i}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <Card className="py-0 transition-colors hover:bg-muted/50 hover:border-blue-500/30">
                          <CardContent className="flex items-start gap-3 p-3">
                            <ExternalLink className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium group-hover:text-blue-500 transition-colors">
                                {r.title}
                              </p>
                              {r.description && (
                                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                  {r.description}
                                </p>
                              )}
                              <p className="text-[11px] text-muted-foreground/60 mt-0.5">
                                {getDomain(r.url)}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-lg font-medium">No resources found</p>
              <p className="text-sm text-muted-foreground">
                Try a different search term
              </p>
            </div>
          )}

          {/* Back to top */}
          <div className="mt-12 mb-8 text-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="gap-1.5"
            >
              <ChevronUp className="h-3.5 w-3.5" />
              Back to top
            </Button>
          </div>

          {/* Footer */}
          <Separator className="mb-6" />
          <footer className="pb-8 text-center text-sm text-muted-foreground space-y-1">
            <p>
              Curated by{" "}
              <a
                href="https://github.com/Timtech4u"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Timothy Olaleke
              </a>
              {" "}&middot; Google Developer Expert for Cloud
            </p>
            <p>
              <a
                href="https://github.com/Timtech4u/awesome-cloudbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Contribute on GitHub
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

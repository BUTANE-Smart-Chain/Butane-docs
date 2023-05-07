import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Homepage" description="Butane Docs">
      <main>
        <br />
        <h1 align="center" style={{ fontWeight: '750' }}>Welcome to Butane Docs</h1>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="./protocol/evmos-cli/single-node"
                header={{
                  label: "🚀 Launch Your Local Node",
                }}
                body={{
                  label:
                    "Getting started on Butane is simple and easy with a local node",
                }}
              />

              <Card
                to="./use"
                header={{
                  label: "☄️ Learn about Butane",
                }}
                body={{
                  label:
                    "Discover why Butane is the flagship EVM on the Butane Ecosystem",
                }}
              />

              <Card
                to="./validate"
                header={{
                  label: "😎 Become a Validator",
                }}
                body={{
                  label:
                    "Join Butane's Proof-of-Stake protocol to help secure the network and earn rewards",
                }}
              />

              <Card
                to="./develop/api"
                header={{
                  label: "💻 View Butane APIs",
                }}
                body={{
                  label:
                    "Access low-level protocol interfaces to build your custom dapp",
                }}
              />

              <Card
                to="./develop/smart-contracts"
                header={{
                  label: "🛠️ Launch dApp on Butane",
                }}
                body={{
                  label:
                    "Learn everything you need to deploy an EVM-compatible smart contract",
                }}
              />

              <Card
                to="./protocol/security"
                header={{
                  label: "🛡️ Security on Butane",
                }}
                body={{
                  label:
                    "Learn about our Security Policy",
                }}
              />

              <Card
                to="https://github.com/BUTANE-Smart-Chain"
                header={{
                  label: "🛠️ Contribute to Butane",
                }}
                body={{
                  label:
                    "Contribute to the thriving ecosystem of Butane and its open-source initiatives",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
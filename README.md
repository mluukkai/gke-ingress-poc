## GKE ingress and pod readiness

GKE ingress does not respect the readiness probes of pods if there are more than 1 pod. BackendConfig must be used.

See 
- https://stackoverflow.com/questions/70670084/configuring-the-health-check-of-a-kubernetes-ingress-with-terraform
- https://cloud.google.com/kubernetes-engine/docs/concepts/ingress#interpreted_hc

You need to do it like this https://github.com/mluukkai/gke-ingress-poc/blob/main/manifests/service.yaml

### repro the problem

Remove the BackendConfig and enable just one pod (by curl http://pod-ip-address/flip ): both will get traffic through ingress
